import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  ActivityIndicator,
  ImageBackground,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Block, Text } from 'galio-framework';
import { Button, Switch } from '../components';
import { Theme } from '../constants';
import { STYLE_CSS, BASE_CSS } from '../constants/Style';
import { WebView } from 'react-native-webview';
// import { } from '../assets/css/style.css'
import { getTimetable } from '../redux/actions';
import { fetchTimetable } from '../api';
import DateTimePicker from '@react-native-community/datetimepicker';
const { width, height } = Dimensions.get('screen');

const Home = (props) => {
  // console.log(Dimensions.get('window'));
  const localTimetable = props.saveTimetable;
  const [timetable, setTimetable] = useState(localTimetable);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [switchValue, setSwitchValue] = useState(0);
  const [all, setAll] = useState(true);
  const [study, setStudy] = useState(false);
  const [exam, setExam] = useState(false);

  const toggleSwitch = (switchName) => {
    switch (switchName) {
      case 'all':
        setSwitchValue(0);
        setAll(true);
        setStudy(false);
        setExam(false);
        getTimetableByCondition(date, 0);

        return;
      case 'study':
        setSwitchValue(1);
        setAll(false);
        setStudy(true);
        setExam(false);
        getTimetableByCondition(date, 1);

        return;
      case 'exam':
        setSwitchValue(2);
        setAll(false);
        setStudy(false);
        setExam(true);
        getTimetableByCondition(date, 2);

        return;
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const getTimetableNow = async () => {
    const result = await props.getTimetable(new Date(), 0);
    setTimetable(result);
  };
  const getTimetableByCondition = async (date, type) => {
    setTimetable('');
    const result = await fetchTimetable(date, type);
    setTimetable(result);
  };

  React.useEffect(() => {
    if (!timetable) {
      getTimetableNow();
    }
  }, []);
  return (
    <Block flex>
      <Block center style={styles.home}>
        <Block style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text style={styles.switchLabel}>Tất cả</Text>
          <Switch disabled={all} value={all} onValueChange={() => toggleSwitch('all')} />
          <Text style={styles.switchLabel}>Lịch học</Text>
          <Switch disabled={study} value={study} onValueChange={() => toggleSwitch('study')} />
          <Text style={styles.switchLabel}>Lịch thi</Text>
          <Switch disabled={exam} value={exam} onValueChange={() => toggleSwitch('exam')} />
        </Block>
        <Text style={{ fontSize: 20, marginLeft: 10, color: Theme.COLORS.ERROR }}>
          {date.toLocaleDateString('vi-VN')}
        </Text>
        <Button
          onlyIcon
          iconSize={20}
          iconFamily="MaterialIcons"
          icon="today"
          iconColor={Theme.COLORS.DARK}
          style={{ backgroundColor: 'transparent', zIndex: 1 }}
          onPress={() => {
            if (showDatePicker) {
              console.log(switchValue);
              getTimetableByCondition(date, switchValue);
            }
            setShowDatePicker(!showDatePicker);
          }}
          title="Show time picker!"
        />
        <Button
          small
          style={{ width: 50, marginHorizontal: 5 }}
          onPress={() => {
            const prevDate = date;
            prevDate.setDate(prevDate.getDate() - 7);
            console.log(prevDate);
            setDate(prevDate);
            getTimetableByCondition(prevDate, switchValue);
          }}
        >
          <Text style={{ color: Theme.COLORS.WHITE }}>Trước</Text>
        </Button>
        <Button
          small
          style={{ width: 55, marginHorizontal: 5 }}
          onPress={() => {
            getTimetableNow();
            const curDate = new Date();
            setDate(curDate);
            getTimetableByCondition(curDate, switchValue);
          }}
        >
          <Text style={{ color: Theme.COLORS.WHITE }}>Hiện tại</Text>
        </Button>
        <Button
          small
          style={{ width: 40, marginHorizontal: 5 }}
          onPress={() => {
            const nextDate = date;
            nextDate.setDate(nextDate.getDate() + 7);
            setDate(nextDate);
            getTimetableByCondition(nextDate, switchValue);
          }}
        >
          <Text style={{ color: Theme.COLORS.WHITE }}>Tiếp</Text>
        </Button>
      </Block>

      {timetable ? (
        <Block flex>
          <WebView
            originWhitelist={['*']}
            source={{
              html:
                '<div class="box-df"> <style>' +
                STYLE_CSS +
                BASE_CSS +
                '</style>' +
                timetable +
                '</div>',
            }}
            style={{ flex: 1, width: 667, height: 375 }}
          />
        </Block>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={Theme.COLORS.PRIMARY} />
        </View>
      )}

      {showDatePicker && <DateTimePicker value={date} display="calendar" onChange={onChangeDate} />}
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    width: 667,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  switchLabel: {
    marginHorizontal: 4,
  },
});
const mapStateToProps = (state) => ({
  saveTimetable: state.data.timetable,
});
export default connect(mapStateToProps, { getTimetable })(Home);
