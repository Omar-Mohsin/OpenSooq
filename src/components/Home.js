import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SelectUser } from '../../redux/auth/authSlice'
import { SelectPosts } from '../../redux/posts/postsSlice'
const Home = () => {

  const posts = useSelector(SelectPosts);
  console.log(posts)

  return (
    <View>


      {posts?.length > 0 ? (
        <View>

          <View>
            {posts.map((post) => (
              <View key={post.id}>
                <Text>{post.user.name}</Text>
                <Text>{post.title}</Text>
                <Text>{post.content}</Text>
              </View>
            ))}
          </View>

        </View>
      ) :

        <Text >there are no posts in this moment</Text>

      }

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})