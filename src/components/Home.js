import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SelectUser } from '../../redux/auth/authSlice'
const Home = () => {

  const user  = useSelector(SelectUser);
  return (
    <View>
      

        {user?.length>0?(
          <View> 
    
          {/* <Text>{user.posts[0].text}</Text> */}


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