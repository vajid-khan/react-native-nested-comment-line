import React, { useCallback } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import {
  getLastChildCommentId,
  getLastChildCommentIdFromParent,
} from "./utils";
import Comment from "./src/Comment";
import { comments } from "./data";

const dimensions = Dimensions.get("window");

const App = () => {
  const keyExtractor = useCallback((item: any) => item.id, []);

  const renderItems = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return (
        <>
          {!item.parent_comment_id ? (
            <Comment
              comment={item}
              hasChildren={item?.child_comments?.length > 0}
              index={index}
              isParent
              lastCommentParentId={getLastChildCommentIdFromParent(item)}
              lastCommentGrandId={getLastChildCommentId(item)}
              nested={0}
              isParentLast={false}
              // @ts-ignore
              isLast={item.id === comments[comments?.length - 1].id}
              parentCommentLength={0}
              totalChildren={item?.child_comments?.length || 0}
            />
          ) : null}

          {item?.child_comments?.length > 0 ? (
            <>
              {item.child_comments.map((levelOneComment: any, idx: number) => {
                return (
                  <React.Fragment key={levelOneComment.id}>
                    <Comment
                      comment={levelOneComment}
                      hasChildren={levelOneComment?.child_comments?.length > 0}
                      index={idx}
                      key={item.id}
                      lastCommentParentId={getLastChildCommentIdFromParent(
                        item
                      )}
                      lastCommentGrandId={getLastChildCommentId(item)}
                      nested={1}
                      isParentLast={
                        levelOneComment.id ===
                        item.child_comments[item.child_comments.length - 1].id
                      }
                      isParent={levelOneComment?.child_comments?.length > 0}
                      parentCommentLength={item?.child_comments?.length || 0}
                      totalChildren={
                        levelOneComment?.child_comments?.length || 0
                      }
                      isLast={
                        levelOneComment.id ===
                        item.child_comments[item.child_comments.length - 1].id
                      }
                    />
                    {levelOneComment?.child_comments?.length > 0 ? (
                      <>
                        {levelOneComment.child_comments.map(
                          (levelTwoComment: any, idxTwo: number) => {
                            return (
                              <React.Fragment key={levelTwoComment.id}>
                                <Comment
                                  comment={levelTwoComment}
                                  hasChildren={false}
                                  index={idxTwo}
                                  key={levelTwoComment.id}
                                  lastCommentParentId={getLastChildCommentIdFromParent(
                                    levelOneComment
                                  )}
                                  nested={2}
                                  lastCommentGrandId={getLastChildCommentId(
                                    levelOneComment
                                  )}
                                  parentCommentLength={
                                    levelOneComment.child_comments.length
                                  }
                                  isLast={
                                    levelTwoComment.id ===
                                    levelOneComment.child_comments[
                                      levelOneComment.child_comments.length - 1
                                    ].id
                                  }
                                  isParentLast={
                                    levelOneComment.id ===
                                    item.child_comments[
                                      item.child_comments.length - 1
                                    ].id
                                  }
                                  totalChildren={
                                    levelOneComment?.child_comments?.length || 0
                                  }
                                />
                              </React.Fragment>
                            );
                          }
                        )}
                      </>
                    ) : null}
                  </React.Fragment>
                );
              })}
            </>
          ) : null}
        </>
      );
    },
    [comments, getLastChildCommentId, getLastChildCommentIdFromParent]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.flatListWrapper}>
        <FlatList
          data={comments}
          keyExtractor={keyExtractor}
          style={styles.flatList}
          renderItem={renderItems}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  flatListWrapper: {
    flex: 1,
    flexGrow: 1,
  },
});

export default App;
