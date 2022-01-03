/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      avatar
      about
      goals
      firstName
      lastName
      email
      posts {
        items {
          id
          body
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      reading {
        id
        title
        author
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        avatar
        about
        goals
        firstName
        lastName
        email
        posts {
          nextToken
        }
        reading {
          id
          title
          author
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      user {
        id
        avatar
        about
        goals
        firstName
        lastName
        email
        posts {
          nextToken
        }
        reading {
          id
          title
          author
        }
        createdAt
        updatedAt
      }
      body
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          commentUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          avatar
          about
          goals
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        body
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      user {
        id
        avatar
        about
        goals
        firstName
        lastName
        email
        posts {
          nextToken
        }
        reading {
          id
          title
          author
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
      commentUserId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        user {
          id
          avatar
          about
          goals
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        postCommentsId
        commentUserId
      }
      nextToken
    }
  }
`;
