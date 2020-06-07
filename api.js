import { AsyncStorage } from 'react-native';
const API_LINK = 'https://sv.iuh.edu.vn/SinhVien/GetDanhSachLichTheoTuan';
const cookie =
  'ASP.NET_SessionId=4mb1tednzhqb4m2srbfcv55y; ASC.AUTH=3415806CF035257F9E2EFA8F4916A4DB9016C233464C246FC1154FDBAA046F2944C2F318B6C73A6CA7B9A5524651BA8B0B6785EA8ECF1E8E47DD5526648E1D3F25D647CE34B4311D4C9A9A93FF378336CBBE7599BEE23C7A44D6361019F29A4516EC3B2AE972F7F3DBFF731C3615FEBC70FC997077C649A1232469679386C19D; __RequestVerificationToken=m8EJXZE1PaCvYc5AG-TBfqQLoWt4uVwHx1p14BRl0MgQBh4WoT1hNYXYzRQRIG6PdWHjS-TeaWSo6gFHRa70YKBr-n58RFJGdqpmoYBY-Fw1';
export const fetchTimetable = async (date, type) => {
  const formData = new FormData();
  formData.append('pNgayHienTai', date.toLocaleDateString('vi-VN'));
  formData.append('pLoaiLich', type);
  const response = await fetch(API_LINK, {
    method: 'POST',
    headers: {
      cookie: cookie,
      'Content-Type': 'text/html',
    },
    body: formData,
  });
  if (response.ok) {
    const result = await response.text();

    return result;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
