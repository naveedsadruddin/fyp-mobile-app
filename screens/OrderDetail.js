import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function OrderDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { order } = route.params;
//   console.log(order)
//   const [time, date] = order.created_at.split(' ');
//   const [hours, minutes] = time.split(':');
//   const [day, month, year] = date.split('-');
//   const formattedDate = `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
//   const formattedTime = `${formatAMPM(hours, minutes)}`;
//   const navigation = useNavigation();

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const formatAMPM = (hours, minutes) => {
    let hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    return `${hour}:${minutes} ${ampm}`;
  };

  const products = order.products;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
        <AntDesign name='arrowleft' size={24} color='white' onPress={() => navigation.navigate("screen11")} /></TouchableOpacity>
        <Text style={styles.headerText}>Order Summary</Text>
      </View>
      <View style={styles.orderSummary}>
        {/* <Text style={styles.restaurantName}>California Pizza</Text> */}
        <Text style={styles.orderId}>Order # {order.id}</Text>
        <Text style={styles.placedOn}>Placed on {"111"} - {"1222"}</Text>
        {products.map(product => (
          <View key={product.id} style={styles.productItem}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>Rs. {product.sale_price}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.paymentDetails}>
        <Text style={styles.sectionHeader}>Payment via Cash</Text>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentLabel}>Subtotal</Text>
          <Text style={styles.paymentValue}>Rs. {order.total - order.delivery_charges}</Text>
        </View>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentLabel}>Delivery Fee</Text>
          <Text style={styles.paymentValue}>Rs. {order.delivery_charges}</Text>
        </View>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentLabel}>Total (incl. GST)</Text>
          <Text style={styles.paymentValue}>Rs. {order.total}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9c2bb3',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  orderSummary: {
    padding: 15,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  orderId: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  placedOn: {
    fontSize: 16,
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
  paymentDetails: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  paymentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentLabel: {
    fontSize: 16,
  },
  paymentValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderDetail;
