function keyExtractor(item: any) {
  if (typeof item === "object" && item?.key != null) {
    return item.key;
  }
  if (typeof item === "object" && item?.id != null) {
    return item.id;
  }
}

function keyExtractorParent(item: any) {
  if (typeof item === "object" && item?.key != null) {
    return item.key;
  }
  if (typeof item === "object" && item?.parent_comment_id != null) {
    return item.parent_comment_id;
  }
}

export const getLastChildCommentId = (item: any) => {
  const items = item["child_comments"];
  if (!item || !items) {
    return;
  }
  return keyExtractor(items[items.length - 1]);
};

export const getLastChildCommentIdFromParent = (item: any) => {
  const items = item["child_comments"];
  if (!item || !items) {
    return;
  }
  return keyExtractorParent(items[items?.length - 1]);
};
