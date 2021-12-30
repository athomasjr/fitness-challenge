/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      avatar
      about
      goals
      firstName
      lastName
      email
      password
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      avatar
      about
      goals
      firstName
      lastName
      email
      password
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      avatar
      about
      goals
      firstName
      lastName
      email
      password
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      user {
        id
        avatar
        about
        goals
        firstName
        lastName
        email
        password
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      user {
        id
        avatar
        about
        goals
        firstName
        lastName
        email
        password
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      user {
        id
        avatar
        about
        goals
        firstName
        lastName
        email
        password
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
        password
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
        password
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
        password
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
