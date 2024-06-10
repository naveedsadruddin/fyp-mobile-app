import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Lowerbar from './Lowerbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function User() {
  const token = useSelector(state => state.user.userData.token);
  const [orders, setOrders] = useState([]);
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  const navigation = useNavigation();
  useEffect(() => {
    axios.get(`http://13.49.252.90/api/users/orders`, config)
      .then(response => {
        console.log(response.data);
        setOrders(response.data.orders);
      })
      .catch(error => {
        console.error('Error fetching APIs:', error);
      });
  }, []);

  const OrderItem = ({ order }) => {
    // Parsing date and time from the string "created_at": "18:10 06-05-2024"
    const [time, date] = order.created_at.split(' ');
    const [hours, minutes] = time.split(':');
    const [day, month, year] = date.split('-');
    const formattedDate = `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
    const formattedTime = `${formatAMPM(hours, minutes)}`;

    return (
      
      <View style={styles.orderItem}>
        <View style={styles.row}>
          <Text style={styles.price}>Total: Rs {order.total}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Date</Text>
          <Text style={styles.info}>Time</Text>
          <Text style={styles.info}>Status</Text>
        </View>
        <View style={styles.row}>
          <Text>{formattedDate}</Text>
          <Text>{formattedTime}</Text>
          <Text style={order.status === 'Completed' ? styles.completed : styles.cancelled}>
            {order.status}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.orderNumber}>Order # {order.id}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('screen15', { order })} style={styles.buttonviewdetail}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    
    );
  };

  const formatAMPM = (hours, minutes) => {
    let hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    return `${hour}:${minutes} ${ampm}`;
  };

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return (
    <View style={{ height: responsiveHeight(100), backgroundColor: "#9c2bb3" }}>
      <View style={style.container}>
        <View style={style.circle}>
          <AntDesign name='user' size={60} color='black' />
        </View>
        <View style={style.text}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: "black" }}>Shilpa Kingrani</Text>
          <Text style={{ fontSize: 18, fontWeight: '400', color: "gray" }}>03312026865</Text>
        </View>
        <ScrollView>
          <View style={style.boxcontainer}>
            {/* <View style={style.box}>
              <Text style={{ fontSize: 18, fontWeight: "800", color: "#9c2bb3" }}>29</Text>
              <Text style={{ fontWeight: '400', fontSize: 19, color: "gray" }}>Wish list</Text>
            </View> */}
            <View style={style.box}>
              <Text style={{ fontSize: 18, fontWeight: "800", color: "#9c2bb3" }}>{orders.length}</Text>
              <Text style={{ fontWeight: '800', fontSize: 19, color: "gray" }}>Total Orders</Text>
            </View>
          </View>
          <Text style={{ fontSize: 24, fontWeight: "500", padding: 15, color: "black" }}>Recent Orders</Text>
          <FlatList
            data={orders}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <OrderItem order={item} />}
            contentContainerStyle={style.recentOrders}
          />
          <View style={{ flex: 1 }}></View>
        </ScrollView>
      </View>
      <Lowerbar />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    alignSelf: "center",
    top: responsiveHeight(10),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  circle: {
    width: responsiveHeight(15),
    height: responsiveHeight(15),
    backgroundColor: "#a9a9a9",
    borderRadius: 100,
    alignSelf: "center",
    bottom: responsiveHeight(8),
    borderColor: "white",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    alignSelf: "center",
    width: responsiveWidth(70),
    height: responsiveHeight(10),
    bottom: responsiveHeight(5),
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  boxcontainer: {
    height: responsiveHeight(13),
    width: responsiveWidth(90),
    alignSelf: "center",
    bottom: responsiveHeight(3),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  box: {
    backgroundColor: "white",
    height: responsiveHeight(10),
    width: responsiveWidth(40),
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 7,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  recentOrders: {
    width: responsiveWidth(90),
    alignSelf: "center",
    gap: 10,
  }
});

const styles = StyleSheet.create({
  orderItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    color: '#9c2bb3',
    fontWeight: 'bold',
  },
  info: {
    fontWeight: 'bold',
    color: '#555',
  },
  completed: {
    color: 'green',
  },
  cancelled: {
    color: 'red',
  },
  orderNumber: {
    color: '#555',
  },
  buttonviewdetail: {
    backgroundColor: '#9c2bb3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default User;
