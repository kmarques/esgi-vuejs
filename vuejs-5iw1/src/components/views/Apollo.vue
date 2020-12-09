<template>
    <div>
        Hello Apollo

        {{ posts }}
    </div>
</template>

<script> 
import gql from 'graphql-tag'

 export default {
   data: () => ({
      posts: {},
    }),
    apollo: {
      posts: {
        query: gql`query getPosts{
            posts {
                content
            }
        }`,
        loadingKey: 'loading',
      }
    }
 }
</script>