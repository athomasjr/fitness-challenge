/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
