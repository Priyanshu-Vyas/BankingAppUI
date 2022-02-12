import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Bottomview() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{alignSelf: 'center', fontSize: 25, color: '#030306'}}>
          Today
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroller}>
        <View style={styles.scrollit}>
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUAAAD///+8vLzy8vLAwMDHx8f29vb7+/u0tLT5+fnf39/a2trGxsavr6/n5+fr6+t6enoaGhpVVVU/Pz+WlpaNjY1cXFxMTEwoKCibm5vR0dGEhIQyMjI4ODhnZ2cNDQ1NTU2CGrxYAAAE6klEQVR4nO2dCXbiMAxAY2ggNJBQ1kK3uf8pp5l2HlnBsiU7UvQPEPRfgldZTox0ktgBkKOG/FFD/nQNi3TGl7R4ZJhvE+5s8zuG5S52eCjsyiHDLHZoaGT9hpfYcSFy6TOU8wYrsq5hGTsmZMqOoYxG5saubZjHjgidvGXIvx9ss20Zxo6HgKZhETscAoqGYRo7HALShuEsdjgEzNSQPWrIHzXkjxryRw35o4b8UUP+qCF/1JA/asgfNeSPGvJHDfkT2vD8ebxsZut1ul7PNpfj55n8F8MZ7t+yfGW6rPLsbU/4u2EM94frskfuxvJ6oLIMYHjKFnft/rPIThQ/T234sbHT+5XcfKBHQGu4fQbo/fCMnUpAaXiAvL7ai8TNyqIzvAw7PATTkcrweL/tfMTyiBYJjeGpHA7ekhKrYaUw/Fp7+1WkXyjREBhuh4MGgtKs4humaII4+T3Yhme3HmKIhf/IHNnwiOpX4d2o4ho+oQsa8zQmQ/gYzYbn0Ri+zEkEjZm/jMPwtW96i8PqdQyG737DtPss3+MbvlIKfiu6v0Ukwxe6T/SHlfN/EcmQqpG5MY9rSNNNNHHtNFAMKTr6Lo5dP4Yh/lCtH7cBHILhOZCgMU7DcARD3NnEPRZxDDHng49wmS96G+LN6G1wmPX7Gn4FFTQGvnbjaxjyG62Af6eehqfAgsaAFxk9Df3XRaGAj/H6GYbq6+tA+30/Q9opUz/LkIY+my/uALdtvAyjCEKP8voYHiIZHoIZhhuQNoENTz0Mw47X6oDGbh6GISb2/YCm++6GH9EEjYFkbLgbbuIJmk0Qw1jtTAWkrXE2DD/mrgMYfzsbZsM/30P69AjYNAxQJ8jZEPKRXq2eeAU8EfCZuhruAeHYDrMgj7TPZHQ1hIzYbOflkA/VfuTmagj5pGwXqyFL53Yfvo8hZGZIYWg/S3Q0BP0NKQzt/4iOhm/RDd+IDUG9IYmhdY/oaJgP/3QgQ+u6a46GoE1tEkPrPt/REBILjaH1ao2bIWzLkMbQdjPRzfC0nNuzsG0UYIafpIY0wAxt1775GtouDPM1tF3J4GtoGytfw7XlU9UwJDBD23k1X0P571C+ofy2VH5/KH9MQzsulT+3kD8/lD/HH8E6zYrYUP5am/z1Uvlr3vL3LeTvPU1g/1D+HrD8fXxQLoZd3wXpYwPkYkwgn0Z+TpT8vLYJ5CbKzy+VnyM8gTxv+bn6EzhvIf/MzATOPck/uzaB84fyz5BO4Bxw8LPctvuieIahz+ODA9SaChaIr4sxgdomyZ9ghrHq08ivMRSqTpRjcFrryxLx9domUHNPft3ECdS+nED90u//ItVksRxJDdpEfh3h29NQGVUt6AnU855ATfZEfl39ZAJ3I3wj/X6LRP4dJRXS75mpkH5XUIXrfU+w/cFH6J1dvki/d+0fwu/O+0H4/Ye/DN1huRBxh+UNyfeQxkIN+aOG/FFD/qghf9SQP2rIHzXkjxryRw35o4b8UUP+qCF/1JA/TUOM/JWxkTYMi9jhEFA0DB2OFY0e0zTE3kSPz7ZlaF0jjA15y9DsYkeEzM60DcGHUEdO2TGE1LZhwK1OUK14AGbGVWxqmWf18ghy3mK90lOjAEQpo7nZNVJAWyUucv794rZVOqxbxKNIZ3xJi45PrDIl4VBD/qghf+Qb/gUKQGK80tSZRwAAAABJRU5ErkJggg==',
            }}
            style={styles.image}
          />
          <View style={styles.text}>
            <Text style={{fontSize: 20, color: '#030306'}}>Uber</Text>
            <Text>Taxi</Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              marginBottom: '9%',
              paddingLeft: '30%',
            }}>
            <Text style={{fontSize: 15, color: '#030306'}}>$5.00</Text>
            <Text>11:30 PM</Text>
          </View>
        </View>
        <View style={styles.scrollit}>
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={styles.image}
          />
          <View style={styles.text}>
            <Text style={{fontSize: 20, color: '#030306'}}>MD Fashion</Text>
            <Text>Shopping</Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              marginBottom: '9%',
              paddingLeft: '8%',
            }}>
            <Text style={{fontSize: 15, color: '#030306'}}>$240.00</Text>
            <Text>9:25 PM</Text>
          </View>
        </View>
        <View style={styles.scrollit}>
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={styles.image}
          />
          <View style={styles.text}>
            <Text style={{fontSize: 20, color: '#030306'}}>Apple Store</Text>
            <Text>Shopping</Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              marginBottom: '9%',
              paddingLeft: '8%',
            }}>
            <Text style={{fontSize: 15, color: '#030306'}}>$1012.00</Text>
            <Text>1:11 AM</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECFD',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  header: {
    margin: '2%',
  },
  scrollit: {
    backgroundColor: '#fff',
    height: 100,
    flexDirection: 'row',
    marginHorizontal: '7%',
    marginVertical: '2%',
  },
  text: {
    justifyContent: 'center',
    padding: '1%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
});
