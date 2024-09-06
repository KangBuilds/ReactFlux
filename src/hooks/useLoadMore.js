import { useStore } from "@nanostores/react";
import { map } from "nanostores";
import {
  contentState,
  filterStatusState,
  setEntries,
  setLoadMoreUnreadVisible,
  setLoadMoreVisible,
  setOffset,
  setUnreadEntries,
  setUnreadOffset,
} from "../store/contentState";
import { settingsState } from "../store/settingsState";
import { parseFirstImage } from "../utils/images";
import { createSetter } from "../utils/nanostores";

const state = map({ loadingMore: false });
const setLoadingMore = createSetter(state, "loadingMore");

const useLoadMore = () => {
  const { entries, offset, total, unreadCount, unreadEntries, unreadOffset } =
    useStore(contentState);
  const { pageSize } = useStore(settingsState);
  const filterStatus = useStore(filterStatusState);

  /* 加载更多 loading*/
  const { loadingMore } = useStore(state);

  const updateEntries = (newEntries) => {
    const uniqueNewEntries = (existingEntries, entriesToAdd) =>
      entriesToAdd.filter(
        (entry) =>
          !existingEntries.some((existing) => existing.id === entry.id),
      );

    if (filterStatus === "all") {
      setEntries((prev) => [...prev, ...uniqueNewEntries(prev, newEntries)]);
      setLoadMoreVisible(entries.length < total);
      setOffset((prev) => prev + pageSize);
    } else {
      setUnreadEntries((prev) => [
        ...prev,
        ...uniqueNewEntries(prev, newEntries),
      ]);
      setLoadMoreUnreadVisible(unreadEntries.length < unreadCount);
      setUnreadOffset((prev) => prev + pageSize);
    }
  };

  const handleLoadMore = async (getEntries) => {
    setLoadingMore(true);

    try {
      let response;
      if (filterStatus === "all") {
        response = await getEntries(offset + pageSize);
      } else {
        response = await getEntries(unreadOffset, filterStatus);
      }
      if (response?.entries) {
        const newEntries = response.entries.map(parseFirstImage);
        updateEntries(newEntries);
      }
    } catch (error) {
      console.error("Error fetching more articles: ", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return { handleLoadMore, loadingMore };
};

export default useLoadMore;
