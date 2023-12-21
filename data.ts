export const comments = [
  {
    __typename: 'comment',
    id: 'f7711b6c-2906-4b75-a1d7-c05e93a84b09',
    author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
    edited_at: null,
    comment_liked: false,
    content: 'Testing nested comments!',
    created_at: '2022-03-25T10:51:02.305885+00:00',

    parent_comment_id: null,
    post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
    post: {
      __typename: 'post',
      id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
    },
    parent_comment: null,
    author_profile: {
      __typename: 'profile',
      id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
      first_name: 'Stathis',
      is_online: false,
      is_staff: false,
      latest_login: '2022-03-25T09:19:14.847+00:00',
      show_online_status: true,
      profile_images: [
        {
          __typename: 'profile_image',
          id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
          avatar: true,
          file_name: 'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
          height: 2048,
          order: 0,
          profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
          uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
          width: 1151
        }
      ]
    },
    comment_images: [],
    total_comment_likes: 0,
    comment_likes_aggregate: {
      __typename: 'comment_like_aggregate',
      nodes: []
    },
    child_comments: [
      {
        __typename: 'comment',
        id: '971a873d-4d45-40c9-9568-48e5b7f4837d',
        author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
        author_profile: {
          __typename: 'profile',
          id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
          first_name: 'Stathis',
          is_online: false,
          is_staff: false,
          latest_login: '2022-03-25T09:19:14.847+00:00',
          show_online_status: true,
          profile_images: [
            {
              __typename: 'profile_image',
              id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
              avatar: true,
              file_name:
                'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
              height: 2048,
              order: 0,
              profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
              uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
              width: 1151
            }
          ]
        },
        comment_images: [],
        comment_liked: false,
        comment_likes_aggregate: {
          __typename: 'comment_like_aggregate',
          nodes: []
        },
        content: 'Hello there',
        created_at: '2022-03-25T10:51:08.107302+00:00',
        edited_at: null,

        parent_comment_id: 'f7711b6c-2906-4b75-a1d7-c05e93a84b09',
        post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
        total_comment_likes: 0,
        post: {
          __typename: 'post',
          id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
        },
        parent_comment: {
          __typename: 'comment',
          id: 'f7711b6c-2906-4b75-a1d7-c05e93a84b09'
        },
        child_comments: []
      }
    ]
  },
  {
    __typename: 'comment',
    id: '59c89a27-7cf9-4bd9-a499-06ed5f754161',
    author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
    edited_at: null,
    comment_liked: false,
    content: 'I hope everything is fine',
    created_at: '2022-03-22T18:41:32.728687+00:00',

    parent_comment_id: null,
    post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
    post: {
      __typename: 'post',
      id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
    },
    parent_comment: null,
    author_profile: {
      __typename: 'profile',
      id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
      first_name: 'Stathis',
      is_online: false,
      is_staff: false,
      latest_login: '2022-03-25T09:19:14.847+00:00',
      show_online_status: true,
      profile_images: [
        {
          __typename: 'profile_image',
          id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
          avatar: true,
          file_name: 'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
          height: 2048,
          order: 0,
          profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

          uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
          width: 1151
        }
      ]
    },
    comment_images: [],
    total_comment_likes: 0,
    comment_likes_aggregate: {
      __typename: 'comment_like_aggregate',
      nodes: []
    },
    child_comments: [
      {
        __typename: 'comment',
        id: 'c0421b09-2d05-4aec-8a56-e1b4089988ab',
        author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
        author_profile: {
          __typename: 'profile',
          id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
          first_name: 'Stathis',
          is_online: false,
          is_staff: false,
          latest_login: '2022-03-25T09:19:14.847+00:00',
          show_online_status: true,
          profile_images: [
            {
              __typename: 'profile_image',
              id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
              avatar: true,
              file_name:
                'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
              height: 2048,
              order: 0,
              profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

              uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
              width: 1151
            }
          ]
        },
        comment_images: [],
        comment_liked: false,
        comment_likes_aggregate: {
          __typename: 'comment_like_aggregate',
          nodes: []
        },
        content: 'This is nice commenting tree!',
        created_at: '2022-03-22T18:41:57.701034+00:00',
        edited_at: null,

        parent_comment_id: '59c89a27-7cf9-4bd9-a499-06ed5f754161',
        post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
        total_comment_likes: 0,
        post: {
          __typename: 'post',
          id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
        },
        parent_comment: {
          __typename: 'comment',
          id: '59c89a27-7cf9-4bd9-a499-06ed5f754161'
        },
        child_comments: []
      },
      {
        __typename: 'comment',
        id: '0d583b8e-2874-420a-8e0b-d407cbce2b8c',
        author_id: '7c2APxuPmdbny7W63078ooypNZx2',
        author_profile: {
          __typename: 'profile',
          id: '7c2APxuPmdbny7W63078ooypNZx2',
          first_name: 'Pete',
          is_online: false,
          is_staff: false,
          latest_login: '2022-03-25T10:41:34.645+00:00',
          show_online_status: true,
          profile_images: [
            {
              __typename: 'profile_image',
              id: '044c44f4-a42f-4f22-b2a8-fa3e0d559ea9',
              avatar: true,
              file_name:
                'gsgva--Bpwlq_7E95074F-9993-4255-BE30-EA7A36E06F31.jpg',
              height: 2048,
              order: 0,
              profile_id: '7c2APxuPmdbny7W63078ooypNZx2',

              uri: 'https://i.pravatar.cc/150?u=a042581f4e290267011',
              width: 1750
            }
          ]
        },
        comment_images: [],
        comment_liked: false,
        comment_likes_aggregate: {
          __typename: 'comment_like_aggregate',
          nodes: []
        },
        content: 'Doing well',
        created_at: '2022-03-23T11:23:31.176812+00:00',
        edited_at: null,

        parent_comment_id: '59c89a27-7cf9-4bd9-a499-06ed5f754161',
        post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
        total_comment_likes: 0,
        post: {
          __typename: 'post',
          id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
        },
        parent_comment: {
          __typename: 'comment',
          id: '59c89a27-7cf9-4bd9-a499-06ed5f754161'
        },
        child_comments: [
          {
            __typename: 'comment',
            id: '24928489-f584-4c0c-81c1-a470ead5a291',
            author_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
            author_profile: {
              __typename: 'profile',
              id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
              first_name: 'Team Four',
              is_online: false,
              is_staff: false,
              latest_login: '2022-03-25T09:19:16.806+00:00',
              show_online_status: true,
              profile_images: [
                {
                  __typename: 'profile_image',
                  id: 'e0b577b4-6656-4dee-87c1-0005b4c7049c',
                  avatar: true,
                  file_name:
                    'eqYoHHDkPjwr_88EE2A5F-E08C-457D-9F41-2C27A867EF5A.jpg',
                  height: 2048,
                  order: 0,
                  profile_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',

                  uri: 'https://i.pravatar.cc/150?u=a042581f4e290267022',
                  width: 1154
                }
              ]
            },
            comment_images: [],
            comment_liked: false,
            comment_likes_aggregate: {
              __typename: 'comment_like_aggregate',
              nodes: []
            },
            content: 'Hey',
            created_at: '2022-03-24T12:15:31.319729+00:00',
            edited_at: null,

            parent_comment_id: '0d583b8e-2874-420a-8e0b-d407cbce2b8c',
            post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
            total_comment_likes: 0,
            post: {
              __typename: 'post',
              id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
            },
            parent_comment: {
              __typename: 'comment',
              id: '0d583b8e-2874-420a-8e0b-d407cbce2b8c'
            }
          },
          {
            __typename: 'comment',
            id: '1d784251-3ae3-491c-9b92-a8533b3e624f',
            author_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
            author_profile: {
              __typename: 'profile',
              id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
              first_name: 'Team Four',
              is_online: false,
              is_staff: false,
              latest_login: '2022-03-25T09:19:16.806+00:00',
              show_online_status: true,
              profile_images: [
                {
                  __typename: 'profile_image',
                  id: 'e0b577b4-6656-4dee-87c1-0005b4c7049c',
                  avatar: true,
                  file_name:
                    'eqYoHHDkPjwr_88EE2A5F-E08C-457D-9F41-2C27A867EF5A.jpg',
                  height: 2048,
                  order: 0,
                  profile_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',

                  uri: 'https://i.pravatar.cc/150?u=a042581f4e290267022',
                  width: 1154
                }
              ]
            },
            comment_images: [],
            comment_liked: false,
            comment_likes_aggregate: {
              __typename: 'comment_like_aggregate',
              nodes: []
            },
            content: 'Life as a react native developer is wonderful!',
            created_at: '2022-03-24T12:15:41.92462+00:00',
            edited_at: null,

            parent_comment_id: '0d583b8e-2874-420a-8e0b-d407cbce2b8c',
            post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
            total_comment_likes: 0,
            post: {
              __typename: 'post',
              id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
            },
            parent_comment: {
              __typename: 'comment',
              id: '0d583b8e-2874-420a-8e0b-d407cbce2b8c'
            }
          },
          {
            __typename: 'comment',
            id: '14e7aed5-2022-4a87-8a38-0d4569350613',
            author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
            author_profile: {
              __typename: 'profile',
              id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
              first_name: 'Stathis',
              is_online: false,
              is_staff: false,
              latest_login: '2022-03-25T09:19:14.847+00:00',
              show_online_status: true,
              profile_images: [
                {
                  __typename: 'profile_image',
                  id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
                  avatar: true,
                  file_name:
                    'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
                  height: 2048,
                  order: 0,
                  profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

                  uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
                  width: 1151
                }
              ]
            },
            comment_images: [],
            comment_liked: false,
            comment_likes_aggregate: {
              __typename: 'comment_like_aggregate',
              nodes: []
            },
            content: 'Hahaha! true story',
            created_at: '2022-03-25T10:16:47.489903+00:00',
            edited_at: null,

            parent_comment_id: '0d583b8e-2874-420a-8e0b-d407cbce2b8c',
            post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
            total_comment_likes: 0,
            post: {
              __typename: 'post',
              id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
            },
            parent_comment: {
              __typename: 'comment',
              id: '0d583b8e-2874-420a-8e0b-d407cbce2b8c'
            }
          }
        ]
      }
    ]
  },
  {
    __typename: 'comment',
    id: '4298fbb4-6f93-4a08-b701-d84a52f673b9',
    author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
    edited_at: null,
    comment_liked: false,
    content: 'But why?',
    created_at: '2022-03-22T18:36:07.867808+00:00',

    parent_comment_id: null,
    post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
    post: {
      __typename: 'post',
      id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
    },
    parent_comment: null,
    author_profile: {
      __typename: 'profile',
      id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
      first_name: 'Stathis',
      is_online: false,
      is_staff: false,
      latest_login: '2022-03-25T09:19:14.847+00:00',
      show_online_status: true,
      profile_images: [
        {
          __typename: 'profile_image',
          id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
          avatar: true,
          file_name: 'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
          height: 2048,
          order: 0,
          profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

          uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
          width: 1151
        }
      ]
    },
    comment_images: [],
    total_comment_likes: 0,
    comment_likes_aggregate: {
      __typename: 'comment_like_aggregate',
      nodes: []
    },
    child_comments: [
      {
        __typename: 'comment',
        id: '12f6f3b3-3a5c-49fc-83ba-3e5607add57d',
        author_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
        author_profile: {
          __typename: 'profile',
          id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
          first_name: 'Team Four',
          is_online: false,
          is_staff: false,
          latest_login: '2022-03-25T09:19:16.806+00:00',
          show_online_status: true,
          profile_images: [
            {
              __typename: 'profile_image',
              id: 'e0b577b4-6656-4dee-87c1-0005b4c7049c',
              avatar: true,
              file_name:
                'eqYoHHDkPjwr_88EE2A5F-E08C-457D-9F41-2C27A867EF5A.jpg',
              height: 2048,
              order: 0,
              profile_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',

              uri: 'https://i.pravatar.cc/150?u=a042581f4e290267022',
              width: 1154
            }
          ]
        },
        comment_images: [],
        comment_liked: false,
        comment_likes_aggregate: {
          __typename: 'comment_like_aggregate',
          nodes: []
        },
        content: 'This is a nice comment, thank you!',
        created_at: '2022-03-24T13:00:53.537299+00:00',
        edited_at: null,

        parent_comment_id: '4298fbb4-6f93-4a08-b701-d84a52f673b9',
        post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
        total_comment_likes: 0,
        post: {
          __typename: 'post',
          id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
        },
        parent_comment: {
          __typename: 'comment',
          id: '4298fbb4-6f93-4a08-b701-d84a52f673b9'
        },
        child_comments: []
      }
    ]
  },
  {
    __typename: 'comment',
    id: 'ba1ff72d-d0d7-4f0e-b9fa-fbd9c8c1901c',
    author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
    edited_at: null,
    comment_liked: false,
    content: 'Hey Kath!',
    created_at: '2022-03-22T18:34:17.216374+00:00',

    parent_comment_id: null,
    post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
    post: {
      __typename: 'post',
      id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
    },
    parent_comment: null,
    author_profile: {
      __typename: 'profile',
      id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
      first_name: 'Stathis',
      is_online: false,
      is_staff: false,
      latest_login: '2022-03-25T09:19:14.847+00:00',
      show_online_status: true,
      profile_images: [
        {
          __typename: 'profile_image',
          id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
          avatar: true,
          file_name: 'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
          height: 2048,
          order: 0,
          profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

          uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
          width: 1151
        }
      ]
    },
    comment_images: [],
    total_comment_likes: 0,
    comment_likes_aggregate: {
      __typename: 'comment_like_aggregate',
      nodes: []
    },
    child_comments: [
      {
        __typename: 'comment',
        id: '5fbbf473-6d84-424f-a6d0-113438037fc2',
        author_id: '7c2APxuPmdbny7W63078ooypNZx2',
        author_profile: {
          __typename: 'profile',
          id: '7c2APxuPmdbny7W63078ooypNZx2',
          first_name: 'Pete',
          is_online: false,
          is_staff: false,
          latest_login: '2022-03-25T10:41:34.645+00:00',
          show_online_status: true,
          profile_images: [
            {
              __typename: 'profile_image',
              id: '044c44f4-a42f-4f22-b2a8-fa3e0d559ea9',
              avatar: true,
              file_name:
                'gsgva--Bpwlq_7E95074F-9993-4255-BE30-EA7A36E06F31.jpg',
              height: 2048,
              order: 0,
              profile_id: '7c2APxuPmdbny7W63078ooypNZx2',

              uri: 'https://i.pravatar.cc/150?u=a042581f4e290267011',
              width: 1750
            }
          ]
        },
        comment_images: [],
        comment_liked: false,
        comment_likes_aggregate: {
          __typename: 'comment_like_aggregate',
          nodes: []
        },
        content: 'Hi there!',
        created_at: '2022-03-22T18:34:27.94634+00:00',
        edited_at: null,

        parent_comment_id: 'ba1ff72d-d0d7-4f0e-b9fa-fbd9c8c1901c',
        post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
        total_comment_likes: 0,
        post: {
          __typename: 'post',
          id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
        },
        parent_comment: {
          __typename: 'comment',
          id: 'ba1ff72d-d0d7-4f0e-b9fa-fbd9c8c1901c'
        },
        child_comments: [
          {
            __typename: 'comment',
            id: '3c45b387-b8b0-4f4b-9846-5f541dcefdcc',
            author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
            author_profile: {
              __typename: 'profile',
              id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
              first_name: 'Stathis',
              is_online: false,
              is_staff: false,
              latest_login: '2022-03-25T09:19:14.847+00:00',
              show_online_status: true,
              profile_images: [
                {
                  __typename: 'profile_image',
                  id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
                  avatar: true,
                  file_name:
                    'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
                  height: 2048,
                  order: 0,
                  profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

                  uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
                  width: 1151
                }
              ]
            },
            comment_images: [],
            comment_liked: false,
            comment_likes_aggregate: {
              __typename: 'comment_like_aggregate',
              nodes: []
            },
            content: 'How are you?',
            created_at: '2022-03-22T18:34:43.792907+00:00',
            edited_at: null,

            parent_comment_id: '5fbbf473-6d84-424f-a6d0-113438037fc2',
            post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
            total_comment_likes: 0,
            post: {
              __typename: 'post',
              id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
            },
            parent_comment: {
              __typename: 'comment',
              id: '5fbbf473-6d84-424f-a6d0-113438037fc2'
            }
          },
          {
            __typename: 'comment',
            id: '87f0c569-0cdd-43c8-b75f-9a16ca76aef0',
            author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
            author_profile: {
              __typename: 'profile',
              id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
              first_name: 'Stathis',
              is_online: false,
              is_staff: false,
              latest_login: '2022-03-25T09:19:14.847+00:00',
              show_online_status: true,
              profile_images: [
                {
                  __typename: 'profile_image',
                  id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
                  avatar: true,
                  file_name:
                    'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
                  height: 2048,
                  order: 0,
                  profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

                  uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
                  width: 1151
                }
              ]
            },
            comment_images: [],
            comment_liked: false,
            comment_likes_aggregate: {
              __typename: 'comment_like_aggregate',
              nodes: []
            },
            content: 'Is everything ok?',
            created_at: '2022-03-22T18:35:13.314447+00:00',
            edited_at: null,

            parent_comment_id: '5fbbf473-6d84-424f-a6d0-113438037fc2',
            post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
            total_comment_likes: 0,
            post: {
              __typename: 'post',
              id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
            },
            parent_comment: {
              __typename: 'comment',
              id: '5fbbf473-6d84-424f-a6d0-113438037fc2'
            }
          },
          {
            __typename: 'comment',
            id: 'a9135114-b95b-4111-941b-181de27a5adf',
            author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
            author_profile: {
              __typename: 'profile',
              id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
              first_name: 'Stathis',
              is_online: false,
              is_staff: false,
              latest_login: '2022-03-25T09:19:14.847+00:00',
              show_online_status: true,
              profile_images: [
                {
                  __typename: 'profile_image',
                  id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
                  avatar: true,
                  file_name:
                    'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
                  height: 2048,
                  order: 0,
                  profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

                  uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
                  width: 1151
                }
              ]
            },
            comment_images: [],
            comment_liked: false,
            comment_likes_aggregate: {
              __typename: 'comment_like_aggregate',
              nodes: []
            },
            content: 'Do you get it??',
            created_at: '2022-03-22T18:37:16.416902+00:00',
            edited_at: null,

            parent_comment_id: '5fbbf473-6d84-424f-a6d0-113438037fc2',
            post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
            total_comment_likes: 0,
            post: {
              __typename: 'post',
              id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
            },
            parent_comment: {
              __typename: 'comment',
              id: '5fbbf473-6d84-424f-a6d0-113438037fc2'
            }
          },
          {
            __typename: 'comment',
            id: 'a2ca98e4-f718-4ef0-833f-d5b2029ce869',
            author_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
            author_profile: {
              __typename: 'profile',
              id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',
              first_name: 'Stathis',
              is_online: false,
              is_staff: false,
              latest_login: '2022-03-25T09:19:14.847+00:00',
              show_online_status: true,
              profile_images: [
                {
                  __typename: 'profile_image',
                  id: '8607c2ba-3466-42f5-b2c9-f3b47420c388',
                  avatar: true,
                  file_name:
                    'NAUfWB53YkjS_9BB02B6B-3929-4B59-9166-57A31DCF3C59.jpg',
                  height: 2048,
                  order: 0,
                  profile_id: 'o5Fn3gzBITh4XgfYi65iNxMJyUH2',

                  uri: 'https://i.pravatar.cc/150?u=a042581f4e290267043',
                  width: 1151
                }
              ]
            },
            comment_images: [],
            comment_liked: false,
            comment_likes_aggregate: {
              __typename: 'comment_like_aggregate',
              nodes: []
            },
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor lacus, lacinia eget cursus vitae, maximus ut felis. Vivamus maximus orci et erat dignissim, in interdum risus fringilla. Etiam cursus nisl sed nisl feugiat porta. Praesent et purus purus. Donec sagittis sit amet purus in ultricies. Ut eget diam sem. In finibus convallis ex, imperdiet maximus tortor tristique vitae. Aliquam erat volutpat. Praesent tincidunt elit vitae ligula tristique, at pretium turpis efficitur. Fusce porta blandit lacus, eu malesuada quam faucibus at. Proin sollicitudin nisi ut risus sagittis, accumsan pharetra lorem dignissim. Maecenas in dolor vitae dolor fermentum porta malesuada sit amet velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
            created_at: '2022-03-25T10:50:34.008464+00:00',
            edited_at: null,

            parent_comment_id: '5fbbf473-6d84-424f-a6d0-113438037fc2',
            post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
            total_comment_likes: 0,
            post: {
              __typename: 'post',
              id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
            },
            parent_comment: {
              __typename: 'comment',
              id: '5fbbf473-6d84-424f-a6d0-113438037fc2'
            }
          }
        ]
      },
      {
        __typename: 'comment',
        id: 'e5da5974-3161-4d86-84e7-df662042bff6',
        author_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
        author_profile: {
          __typename: 'profile',
          id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
          first_name: 'Team Four',
          is_online: false,
          is_staff: false,
          latest_login: '2022-03-25T09:19:16.806+00:00',
          show_online_status: true,
          profile_images: [
            {
              __typename: 'profile_image',
              id: 'e0b577b4-6656-4dee-87c1-0005b4c7049c',
              avatar: true,
              file_name:
                'eqYoHHDkPjwr_88EE2A5F-E08C-457D-9F41-2C27A867EF5A.jpg',
              height: 2048,
              order: 0,
              profile_id: 'ElklOiioEjfcCH1COD7afU0zFOP2',
              uri: 'https://i.pravatar.cc/150?u=a042581f4e290267022',
              width: 1154
            }
          ]
        },
        comment_images: [],
        comment_liked: false,
        comment_likes_aggregate: {
          __typename: 'comment_like_aggregate',
          nodes: []
        },
        content: 'Last comment!',
        created_at: '2022-03-24T12:56:18.64358+00:00',
        edited_at: null,

        parent_comment_id: 'ba1ff72d-d0d7-4f0e-b9fa-fbd9c8c1901c',
        post_id: '5846ee7d-6f12-481d-86a0-1df26a350de1',
        total_comment_likes: 0,
        post: {
          __typename: 'post',
          id: '5846ee7d-6f12-481d-86a0-1df26a350de1'
        },
        parent_comment: {
          __typename: 'comment',
          id: 'ba1ff72d-d0d7-4f0e-b9fa-fbd9c8c1901c'
        },
        child_comments: []
      }
    ]
  }
];