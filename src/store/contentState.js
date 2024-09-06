import { computed, map } from "nanostores";
import { removeDuplicateEntries } from "../utils/deduplicate";
import { filterEntries, filterEntriesByVisibility } from "../utils/filter";
import { createSetter } from "../utils/nanostores";
import { hiddenFeedIdsState } from "./dataState";
import { getSettings, settingsState } from "./settingsState";

export const contentState = map({
  total: 0, // 接口返回文章总数原始值，不受接口返回数据长度限制
  unreadCount: 0, // 接口返回未读文章数原始值，不受接口返回数据长度限制
  offset: 0, // 所有文章分页参数
  unreadOffset: 0, // 未读文章分页参数
  loadMoreVisible: false, // all 页签加载更多按钮可见性
  loadMoreUnreadVisible: false, // unread 页签加载更多按钮可见性
  entries: [], // 接口返回的所有文章
  unreadEntries: [], // 接口返回的未读文章
  infoFrom: getSettings("homePage"), // all | today | starred | history
  filterType: "Title", // title | content | author
  filterString: "", // 搜索文本
  loading: true, // 初始 loading
  isArticleFocused: false, // 文章是否被聚焦
  activeContent: null, // 当前打开的文章
});

// all | unread
export const filterStatusState = computed(
  [contentState, settingsState],
  (content, settings) => {
    const { infoFrom } = content;
    const { showStatus } = settings;
    if (["starred", "history"].includes(infoFrom)) {
      return "all";
    }
    return showStatus;
  },
);

export const filteredEntriesState = computed(
  [contentState, filterStatusState, hiddenFeedIdsState, settingsState],
  (content, filterStatus, hiddenFeedIds, settings) => {
    const { entries, filterString, filterType, infoFrom, unreadEntries } =
      content;
    const currentEntries = filterStatus === "all" ? entries : unreadEntries;
    const filteredEntries = filterEntries(
      currentEntries,
      filterType,
      filterString,
    );

    const { removeDuplicates, showAllFeeds } = settings;
    const visibleEntries = filterEntriesByVisibility(
      filteredEntries,
      infoFrom,
      showAllFeeds,
      hiddenFeedIds,
    );

    if (
      filterStatus === "all" ||
      removeDuplicates === "none" ||
      ["starred", "history"].includes(infoFrom)
    ) {
      return visibleEntries;
    }
    return removeDuplicateEntries(visibleEntries, removeDuplicates);
  },
);

export const setActiveContent = createSetter(contentState, "activeContent");
export const setEntries = createSetter(contentState, "entries");
export const setFilterStatus = createSetter(contentState, "filterStatus");
export const setFilterString = createSetter(contentState, "filterString");
export const setFilterType = createSetter(contentState, "filterType");
export const setInfoFrom = createSetter(contentState, "infoFrom");
export const setIsArticleFocused = createSetter(
  contentState,
  "isArticleFocused",
);
export const setLoading = createSetter(contentState, "loading");
export const setLoadMoreUnreadVisible = createSetter(
  contentState,
  "loadMoreUnreadVisible",
);
export const setLoadMoreVisible = createSetter(contentState, "loadMoreVisible");
export const setOffset = createSetter(contentState, "offset");
export const setTotal = createSetter(contentState, "total");
export const setUnreadCount = createSetter(contentState, "unreadCount");
export const setUnreadEntries = createSetter(contentState, "unreadEntries");
export const setUnreadOffset = createSetter(contentState, "unreadOffset");
