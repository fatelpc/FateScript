/*
美的家电节
活动地址：https://lzdz-isv.isvjcloud.com/dingzhi/box618/activity?activityId=dz2102100028270201
活动时间：2021-02-26 - 2021-03-31
提醒：应群友要求，实测中奖率很低，收益不高。

更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/z_unionPoster.js
已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#美的家电节
15 10 10-31 3 * https://raw.githubusercontent.com/i-chenzhe/qx/main/z_unionPoster.js, tag=美的家电节, enabled=true
================Loon==============
[Script]
cron "15 10 10-31 3 *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_unionPoster.js, tag=美的家电节
===============Surge=================
美的家电节 = type=cron,cronexp="15 10 10-31 3 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_unionPoster.js
============小火箭=========
美的家电节 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_unionPoster.js, cronexpr="15 10 10-31 3 *", timeout=3600, enable=true
 */

const $ = new Env('美的家电节');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '';
let helpAuthor = false;//为作者助力的开关
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => !!item);
}
$.log('脚本版本 v0.1\n更新时间:2021-03-10 15:10\n仓库：https://www.github.com/i-chenzhe/qx');
var _0xodj = 'jsjiami.com.v6',
    _0x487d = [_0xodj, 'w5Ugw4bDtjXDh8OwIE46Sg==', 'wrZhccOuw4c6S8KoVg==', 'wrnDq8KoXcKc', 'woAkw4bDsD/DgcO1PEk=', 'wqImJn7DixrCtcOYwpvDkQ==', 'R8KOZm9fw5DDqRQ=', 'wo9Vwp3CngrDu2J0', 'wqF/wrXDmg==', 'FMO6w64BMWpkBTvDmFI=', 'w7IzK3jDhQ==', 'N8KxQcKh', 'QMOyHQM7NA==', 'wq7DplJgw4Jrwp/Ctw==', 'V8Kiw4Mv', 'w7zDicKAwowpw6d1Og==', 'wpUvw6o4PcO+woVdYADDmAw=', 'w5rDoWkh', 'w7DCmcKdwp1BRg==', 'M8KfQGrCsBY=', 'M8KUQGjCnA==', 'wpBfwo4=', 'w5jDvsK4WsOv', 'w6x/w4EFwqE=', 'w5nDqXs0wo4LwpQ4', 'w7prw6zClmjDpxQ=', 'w6dkwqN4fQ==', 'w6o0IC/CtcKTb1zCv1tGw5RBw5lyw6fDmg==', 'wqnDnsOY', 'wr82ZU/DrXvCmMKww7fCpcKlwqFAwq4STsOtB8OtwolDTnXCpsOMwq0YGGcmHi3DgAkOwrDCscKOw7oFUsKoUsK3wrTCrk3Ck23CosKEGB3CiCHDv8K0bMOGwpFSw6k0w6rDngvDhcKdOMOrbmzCiMOuwqfDvMKbw6LClsKBFUfDkXZiOGIRw4PCryxBQhlqA8OuHMKSXgnDgMOiX8KUw5LDm3o4wq7DlGzCmw/Cj8K4b8K6eysBSsOZw6VVXWzCvTkpw5Jnw6jCpsKmwrYtUVIGw4thBwnDphrCmFHChxHCsSkpw6TCuMOHUMOMw4fDpD99Z8OFNVTCkW11w6cuw6TCn3XDp8KMw79rw6bDvcOkEcKhUcOiYiZcdcOtwoRew4xMdcOGwoFTwqPDoQLDtsOSczTDo13DvTTCtmDClGPChMO2w6PCuwoPw7vDg3szXTktwoDDpzUow5UYHntHST/CnlXDucKuwqd5JUZ3w6zDgEHDisOmPmXCpcKzGcKgDsKHwqvCtCjDvsKma1HCmcK1L8KfJsK0PsOnwq0EWsOheGYpwobCgsKJC8Ofw4rDlMK3OEN6YUzDlsO0w4LDtFI0fVgONmHCi8O+TsO9E8K6NGvDpMO6TFXDhXdWw5I4RF0e', 'w7p6w7nCgn7Cr0gZw4XCtyUJbW7ClMO/b1nCoBrCjcOdw67DpcKOVcOSTiDCjS97wpgxwp4VLSoHwr/CpMOew5bCjcKyw6DCtcOPFwXDtcOwwocVQ8ONwoF8wrvDssOpecK5wqJRw7pZw4E8wp/ChsK5UVnCpsK0w7JaeGXCiFnCmMKowpTCkWc2eWNzHwlAJG9kRn4ww6vCpFdeYw8fA3TCocO3w6zCoxU1', 'w43CjxwHJA==', 'w6owEEDDqQ==', 'w4vCtMKDWMKK', 'W8KbYXRowovCslrDg8KJERLDpsOlw4NXEMKUWjgUw5o/LcKbKQAjwrTDhmprBRjDv8KowojCiGTDmcKSwphTwpVnHxY=', 'wqXDtsKDw6VYbhXClg==', 'wq7DpULCocOy', 'd8Kuw43DiB4=', 'AMKoGhnDpg==', 'bsKRw6jDtTE=', 'w5/DtWkowqgXwqE/woRvwq4FwoDDusKf', 'wptKwoDCmk/CtWFiwpzCqQTCnlzDicKUTAc=', 'w5LDnMKmw7hg', 'wp/CukPCjF4=', 'w4Juw7Qmwqo=', 'woLDoW16w6s=', 'MsOnwp0=', 'LcOhPcOPwoM=', 'OcO1w7hIIS7CncK8w4jCscOpwqk2OSHCqRjDjcKiA8KtBiwoXsOuIF8owo7CjHXCtnR6w6Eew7EfJ8KkbjQ5XMKOw4bDkTTDognDucOLYX9wwpTDq8KbwpU2wqweeyJbwp1xTk3DrAxeR8Kcw5bDtcKQwpEFeXTDnx0cfjfCh8OBIcOqasOKM8KIa8ObQEzCmkTDo8KPw5pZworDj8Oiw7oawqvDtDNWTsOUwqEtw5nDisOhUsKow5FWMGLCoWXDoxLDjkPCpmrCs8Oiw51TFBZFw4tAD2U0YnLCjMOTJ3bCu8OuOyjDiE7DlcO+w5vCuS7DgXTCogrCq1rDlArCvnNQwq3ChcKtwr3ClQfDsMKIw5HDssOubCAMw4XCmDfCq0BuSTUfwqLDlFbCgUbCgkV5UBDCmgE5csKcw6LCqcOEwpYKw7g6RCTDjQwSR8Kqwr/DunzDrMKSO38Fw53CgHPDn3gkbksRwoM1Hyw8wp7CilnCkTfDrXpIwrnDtSMSw7rCt2vCtMOMJjl0FA3CsSbCnTwjwo/CqlTDlsO7MMKkHsKow5wIOcOUwobDtiJCB8OSwobDhBhrw7XDvUPDrcKUw4fCoDhywpoJw5LDp8OEw6sPCQ5Zw4rClDzDmMO5ZMKM', 'X8KCw7QCFw==', 'w4Brw5E5AA==', 'wrJjwrE=', 'w6HCq8KsesKxwrB3w7k=', 'wqMKw7bDhwk=', 'wrbDqEY=', 'wqZywrfDlsObbMK/wpvCtA==', 'w6vDoMKKw65NVQI=', 'MsOzCMKRwohlRwHCusOc', 'WcKAfGo=', 'w7cnJG7DhT3Cvw==', 'w68nJzvDlsODf1DCtll1w4VXwoU9w6vDm8K3', 'wrwhVlrDrDXCmMKSw7rCrg==', 'bUvDsTDCpsKuGQ==', 'w6RRw6PCk2DDsA==', 'bsKpw5srf8K0Xw==', 'FMOlGcOOwqVrRQ8=', 'woFzwpLDtcOiRA==', 'w4vCjhM4Kw==', 'MFQPwpPDuSEN', 'NsKoTXPCiwZZRnDDrA==', 'cMK8w4MuacOHFDRGFMKFdMOLw7bCrFrDjmscCMOyaMKuXBfDqXnDpMKWw5fCiMKXVsOZw5bDrsOcL8O4w69MwrTCs8K9QHlEGcKzBMKEahpKQsKzfC7ChcO2bcOew5Baw6LDvlBTIcKBw7VYworCoiwPwr7DuMOOw6zCuMKtwow1e8OdwoA=', 'e8Orw5s8OQ==', 'woHDtsOQw7fCojdbw7Bg', 'wq/CrcKhd8KYwrdtwqEvwrFvwqvDjXTDv07CmsKnahvCgiYPwo3DkcK5woXDpjkDwpQYN8OWAw1oDMOHw6DDlA==', 'TUN7UMOhwqVHUMKuwo/DhMOC', 'wpXDpnTCo8Ou', 'w7XDt0gzwr0=', 'c17DqTXCsMOdUmV5PsO1wrwjw788KQnCpcOmw5rDkEZwMVPCjwpmEjjDiVjCiMKKAWrDrsK2w47Dm13Dgj7DvMKvecOd', 'wpjDs3UvwrcswpZq', 'w68KMVTDpA==', 'DMKiw5Q6BxI1PyrCiSZZ', 'IcKlXMK9WxLDhsOhV8Kxw6fDiS7Dvw0=', 'K8Kwd2/Cmw==', 'w4/CnMKrwrli', 'wqd0wqDDr8OU', 'wpQkw5E=', 'wpM6V8KEw6zDtyPCo8Ov', 'woHDt8OBw73CqSNB', 'KMKWXFXCjhxhUH7DpcO3w57CnMOS', 'w5pcw50WdA==', 'QFx1', 'aU/DrjDCr8KT', 'wppjwpHDosOaX8ONw5g=', 'w6Brw77Ch2HDoQ==', 'KMKxW8KaQw7DhcO7WcKzw6fDuDXDog==', 'wqdjwrbDisOZfw==', 'NMO4w79MGHvCksKD', 'w6V4w4k2wq7DvcOwbAXCq8Kdw745', 'woXCs3I=', '5oGf5ZSS6Iy45b+l', 'w6R/w4Eiwr/DgMO9ZQ==', 'PMOTCMOB', 'woNzwpHDqMOiX8OXw4Q=', 'w4BuBcON4paW', 'LcK1W8KmVQfDsA==', 'wrlpwqI=', 'wpfDsMOHw5/CmQ==', 'w7DDoMKfwqdLSB7DgFrDnw==', 'QsO4HQI=', 'wqwYYHPDlQ==', 'LMK/Tw==', 'FhrCt8OFDy/DusKCJw==', 'wqrDplN4w6M=', 'wpjCn3HCtH4=', 'CMKWf8KWbg==', 'w7nDq8KXwoYc', 'w4nCilo=', 'wrEbw7A94pSR5ayx5oik5Lqb5YuK772L6I+n5b+c', 'OsOXHcOO', 'U8OzCiU0L8O4aw==', '56Wi5YmIQw==', 'wp7CoD1g4peT', 'wpYzw5fDrSjDuMOAJlQ/EMOv', 'wrk9Yw==', 'TsK8w6TDqy4=', 'G8KyHw==', 'w6xHw5UvJA==', 'W8KbYXRowovCslrDkcKRF0zDucKyw5xUDMOIFzpXwp8xZ8OWNQVtwrXDi0Z0AhzCosKtw5LDg3rDk8KOw4NCwp5eHhY=', 'W8KxNMKcw6A=', 'dMKtw5k5bsKV', 'w7R/w5QkwqTDm8OadAHCl8KZw5Azw4JP', 'wpZnwoTDpw==', 'WCNNa0HCgsOWwo4ybg==', 'woE7UcKFw63DohnCrcO3w6JLa8OYSEU=', 'TsOywppnwqh6', 'NsOuPcOfwp9jRwTCkMOWZ8Oqw6zDiyHCicObdsKeJcOhw5PCvnJyOg==', 'wqdra8K8', 'Z8Ktw6ciJw==', 'WC5Pa0HCqcOlwog4', 'w4zCrSAyFQ==', 'w7hrw4EnNQ==', 'w75hw6o=', 'w6zDr8KzWsOPJAd5Cw==', 'wojDqMKSwr1N', 'wrFnwrHDng==', 'w5DDqX4rwqkEwp8y', 'w7vDusK1Ug==', 'Uj5CVE3CucO8wow3bFUiRsK1', 'XcKGdm9Vw5DDsBA=', 'w6bDgcKQwowMw6tk', 'CQHCosOpEzo=', 'Ik0iwqfDjg==', 'QcONwopKwps=', 'dcKow4rDlhLDgnY=', 'w7F2asOqw5ABAw==', 'w6VUwrt4aw==', 'wqYmdlbDsyfCmMKGw6Y=', 'LMOTGsOaSAA=', 'w4VOw7gUSyBASsKR', 'QcOrw6wAP0hVACA=', 'Y8OIwqlqwoVLWUPDonbCuCU=', 'w5LDr3oFwrUX', 'Z8Ksw7MJPQ==', 'MMK/W8Kh', 'JMKqB8K2Ww3DuMOmWMOsw6XDrzXDiAE9wp44wq3DhUTDoVPChMOcw5ljFg==', 'w5/Do2kpwrEMwoYuwqx5w7Y=', 'QcO7BA==', 'wqBtwpXCtsOySg==', 'w6fDpMKfw6s=', 'VMO4wpNGwr96T3I=', 'RcOgFwLDsSUqw5jDiMO8OcKpQ8OiwqtRw5Yme8KCwpbDklPDvSQSwppewpMWZsOUw5XCoGsvF8KRwo8jw5VpQh8Qwr9je2zCksOQw6LCh8Ol', 'U8OnB1g6bsOgamrCjUUl', 'w7BLwqBxbMOeVRQCKD5kdT3Cu3B5w74HW8K5KlNwwqzDnsK+wojDkinDlcOvwpc=', 'MQXCtw==', 'JsOsFcOMw4cqTA/CtcOVa8Ozw6bCiS7CjMOM', 'RsOMwq1twrA=', 'w6vCrjElLQ==', 'w5XDn8O1WsOxKwFxF8OaScOKw5TCgy7ClgNqf8OxbwbDi8OXE38iw40mw45PbcO7wooHIRQjw4rDmsKyA2zDggHCnsOD', 'OsK4BcKdVQ7DpsKkdcKNwrnDu3zCqg==', 'A8KsHzLDlg==', 'woxfwprCng==', 'X8Ksw5A=', 'w6PDk8K3w7J9wpnDt217', 'UsK6PMKlw60=', 'w7jDusKlwrQl', 'I8KYS38=', 'w6vDtMKqVsOPCAtm', 'wqNtbsOkw5skW8K4', 'w5bDqMK3Z8OOKAtxTw==', 'b0XDtiDCrcKsGDM=', 'w6/CnsKV', 'w7fDr8K1Q8OSeUEwE8KFEcOSwo7CmHfDig0hecOMKArDicObTTE/wqwUwo0KMMK6w5cDZzIuw4jDgsK+QzHCpVXCk8KDw7XCh8Kcw4jDr8OSwqjDrUc0acKb', 'GcOswp0=', 'wokUUcK8w7g=', 'wrJ1wpPDqMOWAMK7cWIVBC8=', 'R8K+w5jDgx0=', 'X8Kaw6QiOw==', 'w6XDs8Ose8OALR0yMcK7Q8KNw57Chw==', 'w4Vlw7AvY8KNYS/DgsKUwqUWUi58wrDCtg==', 'w5zDr3k5w7pAw4UVw4Avw7kzwp3DssOfJ8K/W1A8wqFmdHPCnDDClwXCo8OySnEDw6LCuMKOwoZswqXDk8OQwqzDt3jDmlDCtcKNw4BWTMOGwq4Aw7E1w7Vsw4/DgG/DuQ1fwrxjw5/DmMOhdSfCjcO3w5kYw7zDuMOXwrzChsKjwrrDqGEZwozDlhtBWzTDsjA9bMONw5/DkEMJw7PDnyjDm8KLw53Chyc0wpnDlMKhc8OKSsOoG1chbQVcEMO8Q2/DhcO+wqkEAMKBXnXCksOVw5PCk8KYwr/CiMKhwrnDjMOteB7DhzQgN1MEKMOSfsKXwqJqC8K3worCkMKeJWpaw6fDiEIUAsKJwo3Cj1bDvMKvwoc4JMKAwprDncODA8Otw7cYwrtoWTfCh00Qw5DCnCwIMGh9V37DtQ4Xwq3CsMKCw78GVR9Mw73CscK6w6vChsKGwqvClsKEwojCiXXDm8Ouwo84Vi1jTcO4FMOcw7zDj8ORMsOfecK/TRDDsQ==', 'w6Z+w5IlwqXDjsOgehk=', 'wpFpwpTDow==', 'wobDrcOJw7vCog==', 'wrpywpbClMOU', 'LlACwoLDuRoa', 'w6Zrw7XChiLDpQtXw43CqQ==', 'wp3CuW3CoSBzGMK2wrxfRnbDuTJQJsKxWghCw7AeF8OTXHELwqDDosO5b8KQw5/CucO2wovCtMKhC8OMwokRPyjCnz7Cg8OpMsKwdgJ/JBkjwopmXsObA8KXw48=', 'IU8KwpbCsEgNw485Z8KKw5zDozM0WcOy', 'w4fDqMKDwrpBScOoFmokw6Nq', 'BMOuwpVDwqhtU2PDmFfDlw==', 'wqzDl3dIw7Y=', 'w7rDl8KZR8OF', 'UsK/w5kOfw==', 'Yyl+cVE=', 'LcOTHcKCRxvDtnt1w6I=', 'woZjwrHCksO2ZMK5wpbCpGQ=', 'AgvCsQ==', 'XsO4CQ==', 'IcK+Nz3DpA==', 'wp7DssOYw5bCqA==', 'elBdNsOL', 'wqRyacOow4E=', 'wpM+ScKEw7Y=', 'TsK0KQ==', 'w6goI3fCjSfCv8Oew5DChcOGEcKRw7Abw4zCg3LCvjHCscOk', 'U8O+w78eM19kHSfDkgHDh8O0wrlhw4c=', 'wo1LwonDt8OBf8Kmwq/CqHB1wq/DrTY=', 'w746am7Djg==', 'wpV8wpnDtsK6FsOHw5hnQ1MiGMKEY8OOYA==', 'w5dbw6sKRzdxV8KWdhlXXcOmw6RvM2ZXw6AEKcKYFMKwcMOPw6UQwrxWMjk=', 'H8KpDAXDkMKRw7Rdw5zCnMOYw67CgFHClcK0w6sRwqQwGHjDvcOfwowpwplvWFU=', 'WcOyCwZ6IcOmZzLCiw==', 'w6PCqsKsbsKNw6Jww4wPw6snwq3CmiTCtBPDgMOJNFjDhWFTw5jCgsOlw5/Co3hBw5lCNcOWAVlrdcK7wpHCqFYvw7PCqlzChk/DlsOUw7TCtBBNwoXDokXDmMOMSsOJZsO1aTgKw6nCv8K/w5zCk8Ozw7fDmD/CihZgwrs5RH9JNMOowq9cF8OawrTCg0JowofDgUDDk8K+w4PDgDbDiyYMw5HChcO8w63Dt8OfbQEPOcKQwoRuwqXDlMOqw4xqw6MMw53Ch8KsJDPDmWLCtSfDhsKqwodLGcKqwqDCuz7DpcOmPB0kGsOAw7kyBsObEsKPDALCh8OBwq3CinDCvsKAw6PCvCbCinttNwUuw5TDscKVwo1BADdXwrRlPsOEw6DCpQJsF1PCosKTeUt4U3nDr1oew4wxVWfChMKYwrJWfCwJW8KXw77CvMKHw6Ajw73Dk1TCtcORdsOTK3ZYBcOJPyUlGAciI3lJeMOgAcORfh8pwqDClMK3PWIsw7fConlLHXg4w5fDuzzDsn/CksKoEgMnwrTCr0x+MMKtL8KpF0Zew457e8O+ecO7w5bCr8KVw7rCjMKoKl5Rw5BSZsOywr7DjsOMQ2TDljrDs8O+N8OHA8OfPmTDuMKuwpldw5/DogttbsOyHMOdw7Vhw5puw6bCrRPDsMKNw69wM8O/N8KpEjPChMKCOcOzPcOOwq7CmMOfw40mw7Yyw4bDnjMGwr/Djz8HLcOxw4V7wrwzw7LDoQt4DDnDgcOFw4VFw699c8OuwpHCksK6DSQMJcOTwp7CpMObAEPCsngewpBbw4Yqc8Kowr7DlcOPCsKcVcOTw4ogw7RXJw==', 'wr0mcE/DrnrDnsOPw7PCsMKvwr5Ww75PDMOtXMKlw44dAyrDssOXwqxCDGc5Wg==', 'Z0JwJsOe', 'woVkwqPDmsOf', 'w4EkL2HDmg==', 'TUBxGMOj', 'w7XDknkJwp8=', 'wpjDs3UhwrUAwqciwox5w7Y=', 'wpcwVWvDqQ==', 'cMKmTMKN', 'NsOCHcOfV07Ctj9xw6LCnyvDg8O9asO4ZV9Uw6J1w6w5wpUSGMKQOcOnZmvDpUh5w5sOw7rCimrCoRDDkAbDvcOTfyQ0KsK6PjUFAg==', 'XcOyUg==', 'w6hmwqDCkWM=', 'w4TCn8KUVsKf', 'QC5JaQnCvMOZwoggbg==', 'aGPDuTPCuQ==', 'w6R+w6zClVc=', 'w7g9LC3DkMOdbVY=', '5Lu/5LqN6L2N5Zum5LuX56mv5paE5o6C', 'w7BYw50XCg==', 'wpTDpsKHwotaTQ==', 'UsO8wo9Rwr8=', 'asKtw4M9dcKZXg==', 'w6/Co8K8fMKS', 'RMOnLx3DpXZr', 'VsOvw7sT', 'w6UvOhDDrsOdW0vCtkdCw5JQwow=', 'w7HDssKiWMOvIgN6', 'w7Zvw7nCkw==', 'w7bCgsKXwp9BTMO1wqU=', 'CwfCpsOHDynDvsKB', 'XsOhw6g=', 'amRaE8Oa', 'wrlpwqLDusOHeQ==', 'wpddwpnCsiY=', 'wr1ywrHDj8OGMcO5w5LCrHFpw6TDrHDDrF8YwrQkwqbCq8KlNHfDrXUDw7PCoA4qFMK2wr/DpkbDqFg=', 'wp1AwoDDhA7Cu29jw5TCpgrChw==', 'U8O+w78eM19kHSfDkgHDh8Omw6d5w55GBQU3w4LCuynCixvDvjbDlWQLwrUJBQ==', 'wo7CpnzCpSM7CMK+wrYfRnLDrHIZJ8Ki', 'OsKfAnnClw==', 'WsO6w7sCKQYqRi/DjQbDhsOsw7h8w4hIBgA3w53DuW7CmkfDsDLDiWAFwrgCTmxlEUo=', 'wrJ1worCqsOSTcKwYSUZBW0Qw6Vkwpk=', '44Oq5o6P56a144GH6K6J5YeX6I2A5Y+v5LqI5Lm96LaK5Y6a5LuFGsO1w5B3w6YYwo3nmZPmj5fkvojnl4Q6w6Ekwq3DpsOd55in5LiA5Lmb56215Yu96IyW5Y6b', 'w7p6w7nCgn7Cr0gZw4bCoi1JLi3DkMOxJRTCrBjDj8KRw6DDqcKKVcKJEyjCiTVbwpk7w4QMczsNwq/DsMObw5w=', 'wpzDs8OSw78YDcKwUiNdwrVvMcOMPHgbBg==', 'dcK7w5A=', 'bsK6w4LDgQ==', 'Y8KWTUxu', 'wpBVwofCjRfDvQ==', 'wpMxw6szBg==', 'KMOlMMOTwoxjRg==', 'w7tjw4MnwoXDiMOkeQ==', 'w7zDiMKi', 'wp/DrWrCtcOn', 'wpQ2w6w9MMO+wppc', 'VcKow4rDlhXDhyZS', 'wqdkY3XCs8KZIRPDsz0=', 'OsOiw5VXNnzCmg==', 'wo4vSMKI', '44Oi5o+W56eK44KXw7VZw4zDlmhK5beA5aWn5pS1', '5Lih5LmS6LWv5Y6o', 'wrxowqHDmsON', 'TMKyLcK9w4Y1TMKs', 'w4XDlMKgw6ldwp/Ds24=', 'JuivhOmHn+aXjuebt+W/nuiOmuWPosKKwoTDn8ObPzjDk8O0bQ/CssOIwrzCocKswoMQw7PCkUrCtcOpwpTDtCx7DUzDjsKUfDTDsm/Cq2JKwp5ZSn/CqUAV', 'S1PDhQ3Ctg==', 'w6Jewr55S8OSQAkNPg==', 'RSpBfA==', 'w64hJjTDsMOW5be55aSI5paRFwrCgA==', '5LmM5LmS6LSD5Yya', 'w6rCn8KWwohw', 'w7fCugwTLsKDwpnCuQ==', 'woforrnphoTml6/nm6Llv6bojrzlj6/CulhIw4tNwpA=', 'w6nChCIRCw==', 'TsKMDMKfw7I=', 'w74WJnnDgQ==', 'w70vOyzDvA==', 'MsOZDg==', 'wrVTwrPClcO1', 'cMK8w4MuacOHFDRGFMKFdMOLw7bCrFrDjmscCMOyaMKuXBfDqXnDpMKWw5fCiMKXVsOZ', 'wpdowoLCkDc=', 'w7bDtMKgw5ln', 'w6ozLV7DtQ==', 'w6w+OTPDsMOQak3CsFhJwo9OwoY9w6vChMOyF1ZDwrpALsONw6rDn0IOFMKnF8Ow', 'RldzDsO8wrBEZMOowoPDhcOKdHLDh8OvbF3DrMKYw6bCocOywpZBw7nDml3CrcOrw4nDvWZtCgXDlMOGWh7DskXDoDxBw4VIWWTCsls6B8KZUsKAw40Vw6x2S17Ct8KCVSTCoUTDtMOeNHTDmsKWwr3CrGPCjQ3DqMO4w6J7JMO+wpzDnU7DsMOjw4IWWMK3QD3DhcONw4NUwrXCg8O5XWTCnx/CvMKWw69nO8O7wqJna8KpwrTDssOFMAhdc08lw6zCpTjDqnJFasKFfg7DqcOfYWXDjBMUw7UxYj3CmsKMw4XCs3s6CnUWfMKIwoIdPCHDoAzDqC1Cw4RmQcOkwq3DjlbDs3k5V8Ovw7DCm8O+w5XCpwDDgsKQDSHDmn9yBlXCnB3CvMK3w6XCiCzCkVJoAsO/YsOTwrByTsO/YHAaw64XFXjDuBXDgcOhwpgDwpLCj33DjDzDq8K7wrbDnMO7az/CkBPDrMORwr4CGj7Cu8K4w7vDt8Kjw7PDksOtw51ofcKDw5nCu8KSwocmZMK2w7zDmMOlAHJLwrEOA8OfwqHDrcKoGsKKw7d3GU4bw5sNwojCh8KlDg==', 'H8KpDAXDkMKRw7Rdw5jDk8KSw7nCg1LCgsOswqYXwrppEHrDs8OVwpUJw551GGJrccO6Xy3CpcKxX2bDhWnDq8K5R8KKEsKpw7bDtCQkw5didCbCg8OEE8Klw7cpwoRbwoZ+w7x9w6PDthtiUcKAdytwHBwtasKUw7zDm8K+w5Z8wpTCtTbDrMKFLywrw4DDqMK+w5hCbAXDhcK/w4Fmw7fCgQ==', 'w7cdCzDDkg==', 'IsO3wo3DkSjDgzl5eMKZwpfCgsOXDEJnesOYwr8iBcOMw6giZiPDlFnDlVDCjMOgN8KYw4hnwp7Cjh3ClQ==', 'wqNqwonCsg==', 'wqdjd8Oyw5A=', 'QsOhIj7Diw==', 'IMKTPyfDoA==', 'w4TDssK+w55d', 'X0dgF8Oiw6xEUsO5', 'w5XCik4T', 'wotIwoPCmRE=', 'w7bDscKMw4hd', 'w5JKw68H', 'LcOzEsObwp9i', 'wrlUwpvDr8OO', 'SMOKw64GOw==', 'w6kvPT4=', 'TsK+IMKxw7w8', 'w5hbw7grLg==', 'wpcgw5HDow==', 'w6AzM2w=', 'w7Ntw7nCgUTDkQ==', 'NsO3FcOI', 'dUvDsCA=', 'bMOw5aSZ6LewFUDljIrlmakMw6M=', 'IFwNwofDsAQQ', 'f0XDsyA=', '56eN5Yqb5Luw5aS95YyY5LiG5oq75aWA5Li344Cx', '5Lq55ZCA5Liw5Ze75q655L6s', 'MsKeXHE=', 'J0AXwo7Dsxo6w4I+ecKOw6vDqXtx', 'wqRWwpzCrhU=', 'RcO2BwI=', 'XCpFbQ==', 'MVQKwpI=', 'VcK6J8Ki', 'w4/Cu8KoWMKS', 'Ay3Ch8OJEA==', 'L8KHSnTCuhNDRlXDtMOmw40=', 'wpTDpsKH', 'w5R7w6jCtGI=', 'M8K4R8KlfQQ=', 'w6Jrw4k4', 'wqIzbUs=', 'wrdswpTCocOBRsK4OjgXGCkbw7V/w5h+KMKyw7bCvsKWw45AccO2FMOpfXQcJcO3Lw==', 'YcK4w5vDjS3Djz9OUMKQw48=', 'M8KSTGjCnAZhS38=', 'w7MzLnk=', 'w5F8w7YtKg==', 'wqwww5wdGA==', 'w5Riwp12Yw==', 'bMK0w4g=', '5b6z5YiD56eK5Yurwrg=', 'QMKMenZ+', 'w7vlvILlp47miLzlp6M=', 'w4LDksKtw6hv', 'KloE', 'wpV1wpDCgyU=', 'wp5pwpc=', 'w495w7E2Iw==', '5p2a54Co5LqF6KWH6L6K6LSz776q', 'fsKhT2tw', 'w49Fw4keSw==', 'wp1Twp3ChRHDgHBuwp4=', 'w5TDlcK3w7Bc', 'IMO0w7pKNGHCpMKFw44=', 'XsOhw6g3KE4=', 'w6Jvw7/CgWg=', 'w7Z8w6zChULDvg==', 'w6/DqsKM', 'wqRyZy3ilrQ3wqPDgMKRwoPDi0fmgpbllI/oj4DlvLQ=', 'TMK6I8Kz', 'w6rDtsKlw6VMQg==', 'wpcsw6g=', 'XcKOeGE=', 'wrIuwq3DkuKUmcOsCF7Di8KoMgfmga3ll5zojYnlvIw=', 'wp0gw4jDpw==', 'w5pEw7w=', 'w4DCl08Iw6nCgcKPRH3DoMKwdg==', 'X8Ksw5ALHBY=', 'w4zCpMKQwrtJ', 'w67Dh8KfwosCw7FSM2Eh', 'V8KGe2Nhw5nDtFrDksKOBlTCusK4woFGFMKQEQFbw4Mw', 'wohfwrrCggzDpQ==', 'VcOPw6EaFQ==', 'dcKPw6QBGw==', 'w47DhHkUwqY=', 'MsKcZMKebg==', '5Lik5Lq06Lyn5Zi55Lur5LqG5q6056ih5pW+5oy/', 'w7nCocK+ag==', 'w7Znw6PClXfDvQ4Zw4bCqDQRMXjDkcO6Ik7CpgHDi8OKw7vDj8KEVcOSBS/Cmg==', 'w6UxM2TDlifCuMORwrfCiMKI', 'UcKtERvCng==', 'FgvCpsOeBDzDg8KNMA==', 'B8K0FjzDjsOM', 'Qw3Cr8OVGRjDusKKY8Onwr5dwofDlhEKRV8pwpoiTMOzE0QJw4V1QA==', 'w6EhLg==', 'w5HCvRsIDsKFwp3CusOD', 'wpnCvWfCpmo=', 'woEkw5bDtzbDgQ==', 'wpQvVsKGw4bDsT7CpA==', 'bcKew6cvTg==', 'w7tEw4QIwrM=', 'w6PCjyIDBw==', 'woJtbMOZw74=', 'XypfcmDCvMOBwoA=', 'woXDpnrCpMO2wp0XTA==', 'wowhQg==', '5Y+95omS6KCv5Lid5Yi9', 'w7DCqsKfccKu', 'BA3CscOFFyHDp8KdF8Klw6A=', 'wqXDpMKIw75HVSTDnlrDnhE=', 'w77DuMK1XMOTFht2Fg==', 'w5wvw6Y4Qw==', 'OcKCTlPCkw==', 'c8K+w4zDlj7Dkhtedw==', 'wqNjdsOqw7EOSsKg', 'QcOrw7sGM1JiGg==', 'w7fCiMKCwog=', 'wrR6w6zCgWbDgwZaw5HConE=', '5Y2I5oim6KOp5Lm55Yu7', 'wpnDqsKUwqdeVsO1G1oJwro=', 'jzlNesZkbShzjiamPKi.com.vndN6=='];
(function (_0xee8b44, _0x50c26d, _0xad8492) {
    var _0xf185f0 = function (_0x3c479e, _0x46b85e, _0x2fffa5, _0x39514c, _0x1fb240) {
        _0x46b85e = _0x46b85e >> 0x8, _0x1fb240 = 'po';
        var _0x278054 = 'shift', _0x3a4797 = 'push';
        if (_0x46b85e < _0x3c479e) {
            while (--_0x3c479e) {
                _0x39514c = _0xee8b44[_0x278054]();
                if (_0x46b85e === _0x3c479e) {
                    _0x46b85e = _0x39514c;
                    _0x2fffa5 = _0xee8b44[_0x1fb240 + 'p']();
                } else if (_0x46b85e && _0x2fffa5['replace'](/[zlNeZkbShzPKndN=]/g, '') === _0x46b85e) {
                    _0xee8b44[_0x3a4797](_0x39514c);
                }
            }
            _0xee8b44[_0x3a4797](_0xee8b44[_0x278054]());
        }
        return 0x775d5;
    };
    return _0xf185f0(++_0x50c26d, _0xad8492) >> _0x50c26d ^ _0xad8492;
}(_0x487d, 0x10a, 0x10a00));
var _0x98f1 = function (_0x323e3c, _0x26c21c) {
    _0x323e3c = ~~'0x'['concat'](_0x323e3c);
    var _0x1fa425 = _0x487d[_0x323e3c];
    if (_0x98f1['JBtApz'] === undefined) {
        (function () {
            var _0x57e722 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x232fa9 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x57e722['atob'] || (_0x57e722['atob'] = function (_0x389cf4) {
                var _0x222fb6 = String(_0x389cf4)['replace'](/=+$/, '');
                for (var _0x4c197b = 0x0, _0x48a1d7, _0x2d6cc0, _0x1ea9ab = 0x0, _0x601ac3 = ''; _0x2d6cc0 = _0x222fb6['charAt'](_0x1ea9ab++); ~_0x2d6cc0 && (_0x48a1d7 = _0x4c197b % 0x4 ? _0x48a1d7 * 0x40 + _0x2d6cc0 : _0x2d6cc0, _0x4c197b++ % 0x4) ? _0x601ac3 += String['fromCharCode'](0xff & _0x48a1d7 >> (-0x2 * _0x4c197b & 0x6)) : 0x0) {
                    _0x2d6cc0 = _0x232fa9['indexOf'](_0x2d6cc0);
                }
                return _0x601ac3;
            });
        }());
        var _0x51a48c = function (_0x2f9fb4, _0x26c21c) {
            var _0x40bc40 = [], _0x3f1ffa = 0x0, _0x4a3e8b, _0x1f0af2 = '', _0xf7a631 = '';
            _0x2f9fb4 = atob(_0x2f9fb4);
            for (var _0x17676c = 0x0, _0x26e59f = _0x2f9fb4['length']; _0x17676c < _0x26e59f; _0x17676c++) {
                _0xf7a631 += '%' + ('00' + _0x2f9fb4['charCodeAt'](_0x17676c)['toString'](0x10))['slice'](-0x2);
            }
            _0x2f9fb4 = decodeURIComponent(_0xf7a631);
            for (var _0x5d31fb = 0x0; _0x5d31fb < 0x100; _0x5d31fb++) {
                _0x40bc40[_0x5d31fb] = _0x5d31fb;
            }
            for (_0x5d31fb = 0x0; _0x5d31fb < 0x100; _0x5d31fb++) {
                _0x3f1ffa = (_0x3f1ffa + _0x40bc40[_0x5d31fb] + _0x26c21c['charCodeAt'](_0x5d31fb % _0x26c21c['length'])) % 0x100;
                _0x4a3e8b = _0x40bc40[_0x5d31fb];
                _0x40bc40[_0x5d31fb] = _0x40bc40[_0x3f1ffa];
                _0x40bc40[_0x3f1ffa] = _0x4a3e8b;
            }
            _0x5d31fb = 0x0;
            _0x3f1ffa = 0x0;
            for (var _0x13e16c = 0x0; _0x13e16c < _0x2f9fb4['length']; _0x13e16c++) {
                _0x5d31fb = (_0x5d31fb + 0x1) % 0x100;
                _0x3f1ffa = (_0x3f1ffa + _0x40bc40[_0x5d31fb]) % 0x100;
                _0x4a3e8b = _0x40bc40[_0x5d31fb];
                _0x40bc40[_0x5d31fb] = _0x40bc40[_0x3f1ffa];
                _0x40bc40[_0x3f1ffa] = _0x4a3e8b;
                _0x1f0af2 += String['fromCharCode'](_0x2f9fb4['charCodeAt'](_0x13e16c) ^ _0x40bc40[(_0x40bc40[_0x5d31fb] + _0x40bc40[_0x3f1ffa]) % 0x100]);
            }
            return _0x1f0af2;
        };
        _0x98f1['vZDdJV'] = _0x51a48c;
        _0x98f1['AFrOAk'] = {};
        _0x98f1['JBtApz'] = !![];
    }
    var _0x483e19 = _0x98f1['AFrOAk'][_0x323e3c];
    if (_0x483e19 === undefined) {
        if (_0x98f1['LSItHY'] === undefined) {
            _0x98f1['LSItHY'] = !![];
        }
        _0x1fa425 = _0x98f1['vZDdJV'](_0x1fa425, _0x26c21c);
        _0x98f1['AFrOAk'][_0x323e3c] = _0x1fa425;
    } else {
        _0x1fa425 = _0x483e19;
    }
    return _0x1fa425;
};
!(async () => {
    var _0x163917 = {
        'lWBIz': _0x98f1('0', 'QCvj'),
        'fVISN': function (_0xdcdd59) {
            return _0xdcdd59();
        },
        'kXkzT': _0x98f1('1', 'KWQ@'),
        'fSeBt': _0x98f1('2', 'i0Nw'),
        'najSU': 'https://h5.m.jd.com',
        'MZnwm': _0x98f1('3', 'trB^'),
        'zSBoK': _0x98f1('4', 'hHDf'),
        'WNGRC': _0x98f1('5', 'i0Nw'),
        'GwUTu': _0x98f1('6', ']sxo'),
        'Uackk': _0x98f1('7', 'Bei%'),
        'PyXHu': _0x98f1('8', 'ELmL'),
        'KRkiX': function (_0x5b5d07, _0x675f23) {
            return _0x5b5d07 < _0x675f23;
        },
        'VJUyI': function (_0x2e729a, _0x1a7f9b) {
            return _0x2e729a(_0x1a7f9b);
        },
        'KMKpk': _0x98f1('9', ')S0x'),
        'gewoI': function (_0x237451, _0x15f5a3) {
            return _0x237451 !== _0x15f5a3;
        },
        'nUUpz': function (_0x1b2079, _0x4cf84d, _0x58507b) {
            return _0x1b2079(_0x4cf84d, _0x58507b);
        },
        'VqOlh': function (_0x564320, _0x273531) {
            return _0x564320 === _0x273531;
        }
    };
    if (!cookiesArr[0x0]) {
        $[_0x98f1('a', 'n[M7')]($[_0x98f1('b', '5R93')], _0x163917['Uackk'], _0x163917[_0x98f1('c', '(aKC')], {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
        return;
    }
    for (let _0x5b9c01 = 0x0; _0x163917['KRkiX'](_0x5b9c01, cookiesArr[_0x98f1('d', 'KWQ@')]); _0x5b9c01++) {
        if (cookiesArr[_0x5b9c01]) {
            cookie = cookiesArr[_0x5b9c01];
            originCookie = cookiesArr[_0x5b9c01];
            $['UserName'] = _0x163917['VJUyI'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $[_0x98f1('e', 'Bei%')] = _0x5b9c01 + 0x1;
            $[_0x98f1('f', '2B85')] = !![];
            $[_0x98f1('10', 'TlVP')] = '';
            await _0x163917['fVISN'](checkCookie);
            console[_0x98f1('11', 'MPK!')]('\x0a******开始【京东账号' + $[_0x98f1('12', 'psXe')] + '】' + ($[_0x98f1('13', 'Bei%')] || $[_0x98f1('14', '5R93')]) + _0x98f1('15', '6gz6'));
            if (!$[_0x98f1('16', 'dXRL')]) {
                $['msg']($[_0x98f1('17', '8AT[')], _0x98f1('18', 'g6z4'), _0x98f1('19', '6gz6') + $[_0x98f1('1a', 'QCvj')] + '\x20' + ($[_0x98f1('1b', '2GYp')] || $[_0x98f1('1c', 'MPK!')]) + _0x98f1('1d', 'B)]]'), {'open-url': _0x163917[_0x98f1('1e', '3m7j')]});
                if ($['isNode']()) {
                    await notify[_0x98f1('1f', 'N%%9')]($[_0x98f1('20', '$Pni')] + _0x98f1('21', '6gz6') + $['UserName'], _0x98f1('22', '8AT[') + $[_0x98f1('23', '@ud(')] + '\x20' + $[_0x98f1('24', 'zO$i')] + _0x98f1('25', '6gz6'));
                }
                continue;
            }
            ACT_ID = _0x163917[_0x98f1('26', 'zO$i')];
            ACT_URL = 'https://lzdz-isv.isvjcloud.com/dingzhi/box618/activity';
            await unionPoster();
            if (helpAuthor) {
                function _0x17e756() {
                    var _0x470aac = {
                        'aSOXs': function (_0x1bfa3a) {
                            return _0x1bfa3a();
                        }, 'DxXFA': _0x163917[_0x98f1('27', '2GYp')]
                    };
                    return new Promise(_0x4a98a3 => {
                        $['get']({'url': _0x470aac['DxXFA']}, (_0x2a08a5, _0x53c80a, _0x48d7fe) => {
                            try {
                                if (_0x48d7fe) {
                                    $[_0x98f1('28', '*2j4')] = JSON[_0x98f1('29', '6gz6')](_0x48d7fe);
                                }
                                ;
                            } catch (_0x1ee12a) {
                                console[_0x98f1('2a', 'liq%')](_0x1ee12a);
                            } finally {
                                _0x470aac['aSOXs'](_0x4a98a3);
                            }
                            ;
                        });
                    });
                }

                function _0x5752bd(_0xa0cf0, _0x5911e1) {
                    var _0x3e38b0 = {
                        'ouALI': function (_0x106681) {
                            return _0x163917[_0x98f1('2b', ']sxo')](_0x106681);
                        }
                    };
                    let _0x2f0f18 = {
                        'url': _0x98f1('2c', 'n[M7'),
                        'headers': {
                            'Host': _0x163917[_0x98f1('2d', 'KWQ@')],
                            'Content-Type': _0x163917[_0x98f1('2e', 'MPK!')],
                            'Origin': _0x163917[_0x98f1('2f', '*2j4')],
                            'Accept-Encoding': _0x163917['MZnwm'],
                            'Cookie': cookie,
                            'Connection': 'keep-alive',
                            'Accept': _0x98f1('30', '6gz6'),
                            'User-Agent': _0x98f1('31', 'B)]]'),
                            'Referer': _0x98f1('32', 'A9!h') + _0xa0cf0 + '&way=0&lng=&lat=&sid=&un_area=',
                            'Accept-Language': _0x163917[_0x98f1('33', '6gz6')]
                        },
                        'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + _0xa0cf0 + _0x98f1('34', '5R93') + _0x5911e1 + ',\x22userPic\x22:\x22\x22}&client=wh5&clientVersion=1.0.0'
                    };
                    return new Promise(_0x41a347 => {
                        $[_0x98f1('35', ']sxo')](_0x2f0f18, (_0x395a0e, _0x4956ac, _0x32d3f0) => {
                            if (_0x32d3f0) {
                                $['zRes'] = JSON[_0x98f1('36', 'xD@)')](_0x32d3f0);
                                _0x3e38b0[_0x98f1('37', 'VDG%')](_0x41a347);
                            }
                            ;
                        });
                    });
                }

                function _0x143328(_0x1d701b, _0x779719) {
                    var _0x40ce89 = {
                        'wxjsr': function (_0x959be9) {
                            return _0x959be9();
                        }
                    };
                    let _0x299b27 = {
                        'url': _0x163917[_0x98f1('38', 'A9!h')],
                        'headers': {'Content-Type': _0x163917[_0x98f1('39', 'lFun')]},
                        'body': JSON[_0x98f1('3a', 'B)]]')]({'actID': _0x1d701b, 'actsID': _0x779719, 'done': 0x1})
                    };
                    return new Promise(_0x4f9dbb => {
                        $[_0x98f1('3b', 'vJb^')](_0x299b27, (_0x569005, _0xb5c10d, _0x4f425d) => {
                            _0x40ce89[_0x98f1('3c', 'KWQ@')](_0x4f9dbb);
                        });
                    });
                }

                await _0x163917[_0x98f1('3d', 'MPK!')](_0x17e756);
                if (_0x163917['gewoI']($['zData'][_0x98f1('3e', 'A*v3')][_0x98f1('3f', '2B85')], 0x0)) {
                    for (let _0x5b9c01 = 0x0; _0x163917[_0x98f1('40', 'g6z4')](_0x5b9c01, $[_0x98f1('41', 'i0Nw')][_0x98f1('42', '6gz6')][_0x98f1('43', '2GYp')]); _0x5b9c01++) {
                        actID = $[_0x98f1('44', 'LOQE')][_0x98f1('45', 'M#i3')][_0x5b9c01]['actID'];
                        actsID = $['zData'][_0x98f1('46', '*2j4')][_0x5b9c01][_0x98f1('47', 'ELmL')];
                        await _0x163917['nUUpz'](_0x5752bd, actID, actsID);
                        await $[_0x98f1('48', '2B85')](0x5dc);
                        if ($['Res'] && _0x163917['VqOlh']($['Res']['status'], 0x4)) {
                            await _0x143328(actID, actsID);
                        }
                    }
                    ;
                }
                ;
            }
            ;
        }
    }
})()['catch'](_0x399fcd => {
    $['log']('', '❌\x20' + $[_0x98f1('49', '3m7j')] + _0x98f1('4a', 'jn82') + _0x399fcd + '!', '');
})[_0x98f1('4b', 't6QO')](() => {
    $[_0x98f1('4c', '3m7j')]();
});

async function unionPoster() {
    var _0x3c8e56 = {
        'XfuDv': '6d619b9ea7784e08be32185ce78b802d', 'AWFbG': function (_0x46e444) {
            return _0x46e444();
        }, 'FueFo': function (_0x83c713, _0x517b54, _0x3d0ac2) {
            return _0x83c713(_0x517b54, _0x3d0ac2);
        }, 'fCBeq': function (_0x126457, _0x1528dc) {
            return _0x126457 === _0x1528dc;
        }, 'FkhDB': function (_0xac37d9, _0xde43b3) {
            return _0xac37d9(_0xde43b3);
        }, 'RycRA': function (_0x5b8c38, _0x39d164) {
            return _0x5b8c38 / _0x39d164;
        }, 'VoSKf': function (_0x469759, _0x44dcbe) {
            return _0x469759 > _0x44dcbe;
        }, 'pPwMM': function (_0x46e91c, _0x5e263a) {
            return _0x46e91c > _0x5e263a;
        }, 'EYMkf': function (_0x4a3d0b, _0x32d7d6) {
            return _0x4a3d0b < _0x32d7d6;
        }, 'kDSZw': function (_0x44f4f4, _0x23a2bc) {
            return _0x44f4f4(_0x23a2bc);
        }, 'iEyiF': _0x98f1('4d', 'L)Ss'), 'mfhil': _0x98f1('4e', 'vJb^')
    };
    $[_0x98f1('4f', 'hHDf')] = ![];
    $[_0x98f1('50', 't6QO')] = _0x3c8e56[_0x98f1('51', 'KWQ@')];
    await _0x3c8e56['AWFbG'](grantToken);
    await $[_0x98f1('52', '4c^^')](0x5dc);
    await getActCookie();
    await $['wait'](0x5dc);
    await getActInfo();
    await $[_0x98f1('53', '$Pni')](0x5dc);
    await getMyPing();
    await $[_0x98f1('54', 't6QO')](0x5dc);
    await getUserInfo();
    await $[_0x98f1('55', '2GYp')](0x5dc);
    await _0x3c8e56[_0x98f1('56', '(4Ec')](getActContent, ![], $['userShareCode']);
    if (!$['risk']) {
        if (_0x3c8e56[_0x98f1('57', 'i%hs')]($['openCardData']['oldMember'], 0x0) && $[_0x98f1('58', 'hHDf')]['newMember'] === 0x0) {
            $[_0x98f1('59', ')S0x')]('执行入会任务');
            await _0x3c8e56[_0x98f1('5a', 'ELmL')](shopMember, $['shopId'], $[_0x98f1('5b', 'jn82')]);
            await $[_0x98f1('5c', 'TlVP')](0xbb8);
        }
        await $[_0x98f1('5d', 'kr9o')](0x5dc);
        await getActContent(!![], $['userShareCode']);
        await _0x3c8e56['FueFo'](doTask, _0x98f1('5e', ']sxo'), _0x98f1('5f', '5R93') + ACT_ID + '&pin=' + _0x3c8e56['FkhDB'](encodeURIComponent, $[_0x98f1('60', 'hHDf')]));
        await $[_0x98f1('61', '*2j4')](0x5dc);
        await getActContent(![]);
        times = parseInt(_0x3c8e56['RycRA']($[_0x98f1('62', 'LOQE')], $['drawScore']));
        if (_0x3c8e56[_0x98f1('63', 'Bei%')](times, 0x1)) {
            if (_0x3c8e56['pPwMM'](times, 0x5)) {
                times = 0x5;
            }
            for (let _0x93468f = 0x0; _0x3c8e56[_0x98f1('64', 'N%%9')](_0x93468f, times); _0x93468f++) {
                $[_0x98f1('65', '5R93')](_0x98f1('66', '8AT[') + $[_0x98f1('67', '(aKC')] + _0x98f1('68', 'xD@)'));
                await _0x3c8e56[_0x98f1('69', 'lFun')](draw);
                await $[_0x98f1('5d', 'kr9o')](0x7d0);
                await _0x3c8e56['kDSZw'](getActContent, ![]);
            }
        } else {
            $[_0x98f1('6a', 't6QO')](_0x3c8e56[_0x98f1('6b', 'KWQ@')]);
        }
    } else {
        $[_0x98f1('6c', 'g6z4')](_0x3c8e56[_0x98f1('6d', 'LOQE')]);
    }
}

function draw() {
    var _0x36713f = {
        'MNZok': _0x98f1('6e', 'dXRL'), 'MIwtf': function (_0x5a8c5b) {
            return _0x5a8c5b();
        }, 'ynRxe': function (_0xb0c3d9, _0x6a9e63, _0x1eef00) {
            return _0xb0c3d9(_0x6a9e63, _0x1eef00);
        }, 'sxaID': 'dingzhi/box618/startDraw', 'DrrkO': function (_0x58aaf3, _0x550323) {
            return _0x58aaf3(_0x550323);
        }
    };
    return new Promise(_0x1258db => {
        var _0x21a53c = {
            'Vfhav': _0x36713f[_0x98f1('6f', '(aKC')], 'OUbVA': function (_0x3e8202) {
                return _0x36713f['MIwtf'](_0x3e8202);
            }
        };
        $['post'](_0x36713f[_0x98f1('70', 'A*v3')](taskPostUrl, _0x36713f['sxaID'], 'activityId=' + ACT_ID + '&actorUuid=' + $[_0x98f1('71', 'KWQ@')] + '&pin=' + _0x36713f[_0x98f1('72', 'MPK!')](encodeURIComponent, $[_0x98f1('73', 'dXRL')])), (_0x15ca3e, _0x5c8529, _0x2ec69e) => {
            try {
                if (_0x15ca3e) {
                    $[_0x98f1('74', 'i0Nw')](_0x15ca3e);
                } else {
                    if (_0x2ec69e) {
                        _0x2ec69e = JSON[_0x98f1('75', 'ELmL')](_0x2ec69e);
                        if (_0x2ec69e['result']) {
                            if (_0x2ec69e['data'][_0x98f1('76', 'ELmL')]) {
                                $[_0x98f1('77', 'lFun')](_0x98f1('78', '*2j4') + _0x2ec69e['data'][_0x98f1('79', '2GYp')]);
                                if ($[_0x98f1('7a', 'lFun')]()) {
                                } else {
                                    $[_0x98f1('7b', 'Bei%')]($[_0x98f1('7c', '(aKC')], _0x21a53c['Vfhav'], _0x98f1('7d', 'ELmL') + _0x2ec69e[_0x98f1('46', '*2j4')][_0x98f1('7e', 'M#i3')]);
                                }
                            } else {
                                $[_0x98f1('6c', 'g6z4')]('\x20\x20\x20\x20└花费300积分，抽了个寂寞～');
                            }
                        } else {
                            $[_0x98f1('7f', 'A*v3')](_0x2ec69e[_0x98f1('80', 'vJb^')]);
                        }
                    } else {
                        $[_0x98f1('11', 'MPK!')]('京东返回了一段空数据');
                    }
                }
            } catch (_0x12361e) {
                $[_0x98f1('81', 'giCj')](_0x12361e);
            } finally {
                _0x21a53c[_0x98f1('82', '@ud(')](_0x1258db);
            }
        });
    });
}

async function getActContent(_0xc5cd6d = !![], _0x405d8e = '') {
    var _0x2ca6c4 = {
        'gAnhO': 'addSku', 'cgStW': _0x98f1('83', '3q4J'), 'FLSOu': function (_0x369da8, _0x39c2cc) {
            return _0x369da8 > _0x39c2cc;
        }, 'GpenD': function (_0x14ff6a, _0x51a429, _0x2df27a) {
            return _0x14ff6a(_0x51a429, _0x2df27a);
        }, 'pDdTa': _0x98f1('84', '(aKC'), 'rLLKZ': function (_0x47d6a7, _0x12d0c0) {
            return _0x47d6a7(_0x12d0c0);
        }, 'dNbtz': function (_0x3f683b, _0x25e0db, _0x120aa4) {
            return _0x3f683b(_0x25e0db, _0x120aa4);
        }, 'XdmzC': function (_0x2e2f82, _0xce2bae) {
            return _0x2e2f82(_0xce2bae);
        }
    };
    return new Promise(_0x2ba277 => {
        var _0xa891b1 = {
            'uVPqT': _0x98f1('85', 'KWQ@'),
            'nNdDx': _0x2ca6c4[_0x98f1('86', 'i0Nw')],
            'AFKbg': _0x2ca6c4['cgStW'],
            'UoiXK': function (_0xf7d826, _0x500d7d) {
                return _0x2ca6c4[_0x98f1('87', 'giCj')](_0xf7d826, _0x500d7d);
            },
            'mEeDc': function (_0x2d154c, _0x43d563, _0x2f8da1) {
                return _0x2ca6c4['GpenD'](_0x2d154c, _0x43d563, _0x2f8da1);
            },
            'ydRoS': _0x2ca6c4[_0x98f1('88', 'GrJK')],
            'yuaIj': function (_0x276316, _0x4ddf37) {
                return _0x2ca6c4[_0x98f1('89', 'jn82')](_0x276316, _0x4ddf37);
            },
            'GeyiN': _0x98f1('8a', '3q4J')
        };
        $[_0x98f1('8b', '(4Ec')](_0x2ca6c4['dNbtz'](taskPostUrl, _0x98f1('8c', 'ELmL'), _0x98f1('8d', '*2j4') + ACT_ID + _0x98f1('8e', 'A9!h') + _0x2ca6c4['XdmzC'](encodeURIComponent, $[_0x98f1('8f', 'i%hs')]) + '&pinImg=' + $[_0x98f1('90', 'A9!h')] + '&nick=' + $['nickName'] + _0x98f1('91', 'i%hs') + $['authorShareCode']), async (_0x47398c, _0x57cfde, _0x14389b) => {
            try {
                if (_0x47398c) {
                    console[_0x98f1('92', '6gz6')]('' + JSON[_0x98f1('93', 'zO$i')](_0x47398c));
                } else {
                    if (_0x14389b) {
                        _0x14389b = JSON[_0x98f1('94', 'trB^')](_0x14389b);
                        if (_0xc5cd6d) {
                            if (_0x14389b[_0x98f1('95', 'M#i3')]) {
                                if ($[_0x98f1('96', '8AT[')]) {
                                    for (const _0x5edae5 of [_0xa891b1[_0x98f1('97', 'n[M7')], _0xa891b1[_0x98f1('98', 'TlVP')], _0xa891b1[_0x98f1('99', 'zO$i')], 'followSku']) {
                                        if (!$['taskData'][_0x5edae5]['allStatus']) {
                                            if (_0xa891b1[_0x98f1('9a', 'xD@)')]($[_0x98f1('9b', '$Pni')][_0x5edae5][_0x98f1('9c', 'psXe')]['length'], 0x1)) {
                                                $[_0x98f1('9d', '8AT[')](_0x98f1('9e', 't6QO'));
                                                await _0xa891b1['mEeDc'](doTask, _0xa891b1[_0x98f1('9f', '(4Ec')], _0x98f1('a0', 'i%hs') + ACT_ID + _0x98f1('a1', 'lFun') + $[_0x98f1('a2', 'V4rd')] + _0x98f1('a3', 'Bei%') + _0xa891b1[_0x98f1('a4', 'hHDf')](encodeURIComponent, $[_0x98f1('a5', '5R93')]) + '&taskType=' + $[_0x98f1('a6', 'xD@)')][_0x5edae5][_0x98f1('a7', 'i0Nw')][0x0][_0x98f1('a8', '@ud(')] + _0x98f1('a9', 'ELmL'));
                                            } else {
                                                $['log'](_0x98f1('aa', 'M#i3'));
                                                await _0xa891b1['mEeDc'](doTask, _0xa891b1['ydRoS'], _0x98f1('ab', ')S0x') + ACT_ID + _0x98f1('ac', 'M#i3') + $[_0x98f1('ad', 'xD@)')] + _0x98f1('ae', 'V4rd') + _0xa891b1['yuaIj'](encodeURIComponent, $[_0x98f1('af', 'M#i3')]) + _0x98f1('b0', '*2j4') + $[_0x98f1('b1', '(aKC')][_0x5edae5][_0x98f1('b2', 'KWQ@')][0x0][_0x98f1('b3', 'QCvj')] + _0x98f1('b4', 'i0Nw') + $['taskData'][_0x5edae5]['settings'][0x0][_0x98f1('b5', '*2j4')]);
                                            }
                                        }
                                        await $[_0x98f1('b6', 'jn82')](0x5dc);
                                    }
                                }
                            }
                        } else {
                            if (_0x14389b[_0x98f1('b7', '4c^^')]) {
                                $[_0x98f1('b8', 'xUEu')] = _0x14389b[_0x98f1('b9', 'giCj')][_0x98f1('ba', '3q4J')];
                                $[_0x98f1('bb', 'Bei%')] = _0x14389b[_0x98f1('42', '6gz6')]['openCardData'];
                                $['actorUuid'] = _0x14389b[_0x98f1('bc', 'GrJK')]['actorUuid'];
                                $[_0x98f1('bd', '@ud(')] = _0x14389b['data'][_0x98f1('be', 'hHDf')];
                                $[_0x98f1('62', 'LOQE')] = _0x14389b['data'][_0x98f1('bf', 'hHDf')];
                                $['drawScore'] = _0x14389b[_0x98f1('42', '6gz6')]['drawScore'];
                                $['openCardData'] = _0x14389b[_0x98f1('42', '6gz6')]['openCardData'];
                            } else {
                                $['log'](_0x14389b['errorMessage']);
                            }
                        }
                    } else {
                        $[_0x98f1('c0', 'KWQ@')](_0xa891b1[_0x98f1('c1', 'V4rd')]);
                    }
                }
            } catch (_0x1b3029) {
                $[_0x98f1('81', 'giCj')](_0x1b3029, _0x57cfde);
            } finally {
                _0xa891b1[_0x98f1('c2', 'TlVP')](_0x2ba277, _0x14389b);
            }
        });
    });
}

function shopMember(_0x30b9dc, _0x5a4ccf) {
    var _0x557dfa = {
        'QYMrH': _0x98f1('c3', 'GrJK'),
        'vfVYQ': _0x98f1('c4', 'ELmL'),
        'WdTja': _0x98f1('c5', 'N%%9'),
        'XfLqm': function (_0x121b3d, _0x170f12) {
            return _0x121b3d(_0x170f12);
        },
        'lwAsh': 'keep-alive',
        'HrqPU': 'zh-cn',
        'lACLy': _0x98f1('c6', '6gz6'),
        'btHfO': function (_0x599c80) {
            return _0x599c80();
        },
        'oFufD': 'api.m.jd.com',
        'nbWMI': _0x98f1('c7', '@ud('),
        'BzNFw': _0x98f1('c8', 'kr9o'),
        'wublE': function (_0x1e7818, _0x1dade5) {
            return _0x1e7818 + _0x1dade5;
        },
        'BpsPU': '?activityId=',
        'nJGQj': '&shareUuid='
    };
    let _0x1698a9 = {
        'url': _0x98f1('c9', 'ELmL') + _0x30b9dc + '%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': _0x557dfa[_0x98f1('ca', 'zO$i')],
            'Accept': _0x557dfa[_0x98f1('cb', '*2j4')],
            'Connection': _0x557dfa['lwAsh'],
            'Cookie': cookie,
            'User-Agent': _0x557dfa[_0x98f1('cc', '(4Ec')],
            'Accept-Language': _0x557dfa['HrqPU'],
            'Referer': _0x98f1('cd', '(aKC') + _0x30b9dc + _0x98f1('ce', 'lFun') + _0x5a4ccf + '&venderType=5&channel=401&returnUrl=' + _0x557dfa[_0x98f1('cf', 'psXe')](encodeURIComponent, _0x557dfa[_0x98f1('d0', '5R93')](_0x557dfa[_0x98f1('d1', 'A9!h')](_0x557dfa['wublE'](ACT_URL, _0x557dfa['BpsPU']), ACT_ID) + _0x557dfa[_0x98f1('d2', '5R93')], $[_0x98f1('d3', 'GrJK')])),
            'Accept-Encoding': _0x98f1('d4', 'KWQ@')
        }
    };
    return new Promise(_0x360da6 => {
        var _0x351242 = {
            'PKSES': _0x557dfa[_0x98f1('d5', 'lFun')],
            'aJvWe': _0x557dfa[_0x98f1('d6', 'trB^')],
            'AJDDN': 'set-cookie',
            'iGzYK': _0x557dfa[_0x98f1('d7', 'TlVP')],
            'IeTNc': function (_0x269be7, _0x34a614) {
                return _0x557dfa[_0x98f1('d8', 'xUEu')](_0x269be7, _0x34a614);
            },
            'cezsq': _0x98f1('d9', 'n[M7'),
            'EpNPw': _0x557dfa[_0x98f1('da', '2B85')],
            'KwUsz': _0x98f1('db', 'dXRL'),
            'knaOB': _0x557dfa['HrqPU'],
            'kXvYD': function (_0x1479fe, _0x1bd578) {
                return _0x1479fe + _0x1bd578;
            },
            'bFcvM': '&shareUuid=',
            'kGXub': _0x557dfa[_0x98f1('dc', 'giCj')],
            'ereAU': function (_0x3b43d3) {
                return _0x557dfa[_0x98f1('dd', 'LOQE')](_0x3b43d3);
            }
        };
        $[_0x98f1('de', 'QCvj')](_0x1698a9, async (_0x334e54, _0x1a1f69, _0x449d01) => {
            var _0x36946c = {'LmYTj': _0x98f1('df', '(4Ec'), 'rrePa': _0x351242[_0x98f1('e0', 'M#i3')]};
            try {
                if (_0x334e54) {
                    console[_0x98f1('e1', 'xUEu')]('' + JSON[_0x98f1('e2', 'QCvj')](_0x334e54));
                } else {
                    _0x449d01 = JSON['parse'](_0x449d01);
                    if (_0x1a1f69[_0x351242['aJvWe']][_0x351242['AJDDN']]) {
                        cookie = _0x1a1f69[_0x98f1('e3', 'lFun')][_0x98f1('e4', '2B85')][_0x98f1('e5', '(aKC')](';') + ';\x20' + originCookie;
                    }
                    if (_0x449d01[_0x98f1('e6', '*2j4')]) {
                        $['bindUserBasicVOList'] = _0x449d01['result'][_0x98f1('e7', '6gz6')]['bindUserBasicVOList'];
                        registerExtend = {};
                        for (const _0x5cef78 of $['bindUserBasicVOList']) {
                            if (_0x5cef78[_0x98f1('e8', 'kr9o')]) {
                                switch (_0x5cef78[_0x98f1('e9', '3m7j')]) {
                                    case _0x98f1('ea', 'ELmL'):
                                        registerExtend[_0x5cef78[_0x98f1('eb', 'n[M7')]] = '小' + $[_0x98f1('ec', '2B85')][_0x98f1('ed', 'g6z4')](0x0, 0x2);
                                        break;
                                    case _0x351242[_0x98f1('ee', 'zO$i')]:
                                        registerExtend[_0x5cef78[_0x98f1('ef', 't6QO')]] = '男';
                                        break;
                                    case _0x98f1('f0', 'hHDf'):
                                        registerExtend[_0x5cef78[_0x98f1('e9', '3m7j')]] = '1993-03-01';
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                        let _0x1698a9 = {
                            'url': _0x98f1('f1', 'n[M7') + _0x351242[_0x98f1('f2', 'i0Nw')](encodeURIComponent, JSON[_0x98f1('f3', 'sBkC')]({
                                'venderId': _0x30b9dc,
                                'shopId': _0x5a4ccf,
                                'bindByVerifyCodeFlag': 0x1,
                                'registerExtend': registerExtend,
                                'writeChildFlag': 0x0,
                                'channel': 0x191
                            })) + _0x98f1('f4', '(4Ec'),
                            'headers': {
                                'Host': _0x98f1('f5', 'B)]]'),
                                'Accept': _0x351242[_0x98f1('f6', 'psXe')],
                                'Connection': _0x351242['EpNPw'],
                                'Cookie': cookie,
                                'User-Agent': _0x351242[_0x98f1('f7', 'GrJK')],
                                'Accept-Language': _0x351242['knaOB'],
                                'Referer': _0x98f1('f8', '3m7j') + _0x30b9dc + _0x98f1('f9', 'GrJK') + _0x5a4ccf + '&venderType=5&channel=401&returnUrl=' + _0x351242['IeTNc'](encodeURIComponent, _0x351242['kXvYD'](_0x351242[_0x98f1('fa', '*2j4')](ACT_URL, _0x98f1('fb', 'giCj')) + ACT_ID + _0x351242['bFcvM'], $[_0x98f1('fc', 'jn82')])),
                                'Accept-Encoding': _0x351242[_0x98f1('fd', 'hHDf')]
                            }
                        };
                        return new Promise(_0x360da6 => {
                            var _0x59f843 = {
                                'lwFpZ': _0x36946c[_0x98f1('fe', '@ud(')],
                                'BBgGC': _0x36946c[_0x98f1('ff', 'QCvj')]
                            };
                            $[_0x98f1('100', 'M#i3')](_0x1698a9, (_0x334e54, _0x1a1f69, _0x449d01) => {
                                try {
                                    if (_0x334e54) {
                                        console[_0x98f1('11', 'MPK!')]('' + JSON[_0x98f1('101', '8AT[')](_0x334e54));
                                    } else {
                                        _0x449d01 = JSON[_0x98f1('29', '6gz6')](_0x449d01);
                                        if (_0x449d01[_0x98f1('102', 'sBkC')]) {
                                            if (_0x449d01['result']) {
                                                if (_0x449d01['result'][_0x98f1('103', 'hHDf')](_0x59f843[_0x98f1('104', 'A*v3')])) {
                                                    $[_0x98f1('105', 'B)]]')]('\x20\x20\x20\x20└' + _0x449d01[_0x98f1('106', '3m7j')][_0x98f1('107', 'g6z4')]);
                                                }
                                                if (_0x449d01[_0x98f1('108', 'ELmL')][_0x98f1('109', 'jn82')](_0x59f843['BBgGC'])) {
                                                    if (_0x449d01['result']['giftInfo'] !== null) {
                                                        for (const _0x4e07f0 of _0x449d01[_0x98f1('10a', 'QCvj')][_0x98f1('10b', 'dXRL')]['giftList']) {
                                                            if (_0x4e07f0[_0x98f1('10c', 'TlVP')]['indexOf']('京豆')) {
                                                                $[_0x98f1('10d', 'trB^')](_0x98f1('10e', 'i0Nw') + _0x4e07f0[_0x98f1('10f', 'TlVP')] + '京豆');
                                                                $[_0x98f1('110', 'liq%')] += _0x4e07f0[_0x98f1('111', 'g6z4')];
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                $['log'](_0x98f1('112', '8AT[') + _0x449d01[_0x98f1('113', 'jn82')]);
                                            }
                                        }
                                    }
                                } catch (_0x1338b5) {
                                    console['log'](_0x1338b5, _0x1a1f69);
                                } finally {
                                    _0x360da6();
                                }
                            });
                        });
                    }
                }
            } catch (_0x1750ef) {
                console[_0x98f1('114', 'QCvj')](_0x1750ef, _0x1a1f69);
            } finally {
                _0x351242[_0x98f1('115', 'sBkC')](_0x360da6);
            }
        });
    });
}

function doTask(_0x13963b, _0x4b5ab8) {
    var _0x53643e = {
        'qCdaq': 'headers',
        'HFWCZ': _0x98f1('116', 'lFun'),
        'NgKOu': '京东返回了一段空数据',
        'NXLpk': function (_0x3b697d) {
            return _0x3b697d();
        },
        'yJdLH': function (_0x371dcd, _0x4b569d, _0x448afc) {
            return _0x371dcd(_0x4b569d, _0x448afc);
        }
    };
    return new Promise(_0x226f21 => {
        $[_0x98f1('117', '4c^^')](_0x53643e[_0x98f1('118', 'kr9o')](taskPostUrl, _0x13963b, _0x4b5ab8), (_0x41570b, _0xe129fb, _0x58616f) => {
            try {
                if (_0x41570b) {
                    console[_0x98f1('119', 'jn82')]('' + JSON[_0x98f1('11a', 'i%hs')](_0x41570b));
                } else {
                    if (_0x58616f) {
                        _0x58616f = JSON[_0x98f1('11b', 'xUEu')](_0x58616f);
                        if (_0xe129fb[_0x53643e[_0x98f1('11c', 'trB^')]][_0x53643e[_0x98f1('11d', 'jn82')]]) {
                            cookie = _0xe129fb[_0x53643e[_0x98f1('11e', '3q4J')]][_0x53643e['HFWCZ']]['join'](';') + ';\x20' + originCookie;
                        }
                        if (_0x58616f['result']) {
                            $[_0x98f1('11f', 'vJb^')](_0x98f1('120', 'N%%9') + _0x58616f[_0x98f1('121', 'liq%')][_0x98f1('122', '4c^^')] + _0x98f1('123', '6gz6'));
                        } else {
                            $['log'](_0x98f1('124', 'GrJK') + _0x58616f[_0x98f1('125', 'M#i3')] + '\x0a');
                        }
                    } else {
                        $[_0x98f1('126', 'kr9o')](_0x53643e[_0x98f1('127', '5R93')]);
                    }
                }
            } catch (_0x2ae4c0) {
                console[_0x98f1('128', 'A9!h')](_0x2ae4c0, _0xe129fb);
            } finally {
                _0x53643e[_0x98f1('129', 'LOQE')](_0x226f21);
            }
        });
    });
}

function getAuthorCode(_0x3c37be) {
    var _0x905598 = {
        'yjzJh': function (_0x4be4b6, _0x1ba849) {
            return _0x4be4b6 > _0x1ba849;
        }, 'bOvxe': function (_0x30baf9, _0x391e76) {
            return _0x30baf9(_0x391e76);
        }
    };
    return new Promise(async _0x1d094b => {
        $['get']({'url': _0x98f1('12a', '(aKC') + _0x3c37be}, (_0x51afcd, _0x327f2b, _0xba56ad) => {
            try {
                if (_0x51afcd) {
                    console['log']('' + JSON['stringify'](_0x51afcd));
                } else {
                    if (_0xba56ad) {
                        _0xba56ad = JSON['parse'](_0xba56ad);
                        if (_0x905598[_0x98f1('12b', '2GYp')](_0xba56ad['data'][_0x98f1('12c', 'n[M7')], 0x0)) {
                            $[_0x98f1('12d', 'TlVP')] = _0xba56ad[_0x98f1('12e', 'g6z4')][0x0][_0x98f1('12f', '$Pni')];
                        } else {
                            $[_0x98f1('130', '8AT[')] = '';
                        }
                    }
                }
            } catch (_0x56aaaa) {
                $[_0x98f1('131', 'L)Ss')](_0x56aaaa, _0x327f2b);
            } finally {
                _0x905598['bOvxe'](_0x1d094b, _0xba56ad);
            }
        });
    });
}

function getUserInfo() {
    var _0x280548 = {
        'TnPlI': function (_0x408b84, _0x522d9d) {
            return _0x408b84(_0x522d9d);
        }, 'ndISu': function (_0x570124, _0x340ee5, _0x36ca4d) {
            return _0x570124(_0x340ee5, _0x36ca4d);
        }, 'ZtXxz': _0x98f1('132', '2B85')
    };
    return new Promise(_0x41338d => {
        let _0x30131a = _0x98f1('133', 'xD@)') + _0x280548[_0x98f1('134', 'giCj')](encodeURIComponent, $[_0x98f1('135', '$Pni')]);
        $['post'](_0x280548[_0x98f1('136', 'zO$i')](taskPostUrl, _0x280548[_0x98f1('137', 'LOQE')], _0x30131a), async (_0x31a387, _0x35a08f, _0x4eef80) => {
            try {
                if (_0x31a387) {
                    console[_0x98f1('138', 'ELmL')]('' + JSON[_0x98f1('139', 'V4rd')](_0x31a387));
                } else {
                    _0x4eef80 = JSON[_0x98f1('13a', ')S0x')](_0x4eef80);
                    if (_0x4eef80['data']) {
                        console['log']('用户【' + _0x4eef80[_0x98f1('13b', 'QCvj')][_0x98f1('13c', 'GrJK')] + '】信息获取成功');
                        $['userId'] = _0x4eef80['data']['id'];
                        $['pinImg'] = _0x4eef80[_0x98f1('13d', 'V4rd')][_0x98f1('13e', '$Pni')];
                        $[_0x98f1('13f', '(aKC')] = _0x4eef80[_0x98f1('42', '6gz6')][_0x98f1('140', '3q4J')];
                    } else {
                        console['log'](_0x4eef80);
                    }
                }
            } catch (_0x5bf59e) {
                $[_0x98f1('141', 'i%hs')](_0x5bf59e, _0x35a08f);
            } finally {
                _0x41338d(_0x4eef80);
            }
        });
    });
}

function getMyPing() {
    var _0x29518b = {
        'dxAAR': function (_0x21ade9) {
            return _0x21ade9();
        }, 'cPwhA': function (_0x58f5e5, _0x4d0a67, _0x4b797c) {
            return _0x58f5e5(_0x4d0a67, _0x4b797c);
        }
    };
    return new Promise(_0x563326 => {
        var _0x13cb25 = {
            'ToDGS': function (_0x184721) {
                return _0x29518b[_0x98f1('142', 't6QO')](_0x184721);
            }
        };
        $['post'](_0x29518b[_0x98f1('143', 'L)Ss')](taskPostUrl, 'customer/getMyPing', _0x98f1('144', '5R93') + $['shopId'] + _0x98f1('145', 'xD@)') + $[_0x98f1('146', 'N%%9')] + '&fromType=APP'), async (_0x11e405, _0x556fcf, _0x196682) => {
            try {
                if (_0x11e405) {
                    console['log']('' + JSON[_0x98f1('147', 'kr9o')](_0x11e405));
                } else {
                    _0x196682 = JSON[_0x98f1('94', 'trB^')](_0x196682);
                    if (_0x196682[_0x98f1('148', 'liq%')]) {
                        $[_0x98f1('149', 'A*v3')] = _0x196682['data'][_0x98f1('14a', 'i0Nw')];
                        cookie = _0x98f1('14b', 'L)Ss') + $['secretPin'] + ';' + cookie;
                    }
                }
            } catch (_0x2aa4aa) {
                $[_0x98f1('14c', 'GrJK')](_0x2aa4aa, _0x556fcf);
            } finally {
                _0x13cb25[_0x98f1('14d', 'giCj')](_0x563326);
            }
        });
    });
}

function getActInfo() {
    var _0x1c785e = {
        'hgKAU': function (_0x299081, _0x371dfd, _0xdb091b) {
            return _0x299081(_0x371dfd, _0xdb091b);
        }
    };
    return new Promise(_0x320d0e => {
        $[_0x98f1('14e', 'jn82')](_0x1c785e['hgKAU'](taskPostUrl, _0x98f1('14f', 'jn82'), _0x98f1('150', 'GrJK') + ACT_ID), async (_0x54f66c, _0x4d13ba, _0x42af3c) => {
            try {
                if (_0x54f66c) {
                    console[_0x98f1('151', 'VDG%')]('' + JSON['stringify'](_0x54f66c));
                } else {
                    _0x42af3c = JSON['parse'](_0x42af3c);
                    if (_0x42af3c[_0x98f1('148', 'liq%')]) {
                        $[_0x98f1('152', ']sxo')] = _0x42af3c[_0x98f1('153', 'lFun')][_0x98f1('154', 'L)Ss')];
                    }
                }
            } catch (_0x502148) {
                $['logErr'](_0x502148, _0x4d13ba);
            } finally {
                _0x320d0e(_0x42af3c);
            }
        });
    });
}

function grantTokenKey() {
    var _0x76c970 = {
        'KsfvF': function (_0x5c7c50) {
            return _0x5c7c50();
        },
        'ngQNv': _0x98f1('155', 'VDG%'),
        'dQPOj': _0x98f1('156', '4c^^'),
        'LcSFt': _0x98f1('157', 'N%%9'),
        'IgXDM': _0x98f1('158', '3m7j'),
        'tqgGu': _0x98f1('159', '2B85')
    };
    let _0x481112 = {
        'url': _0x76c970['ngQNv'],
        'headers': {
            'Host': _0x76c970[_0x98f1('15a', 'L)Ss')],
            'Content-Type': _0x76c970['LcSFt'],
            'Accept': _0x76c970[_0x98f1('15b', 'zO$i')],
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': _0x98f1('15c', 'V4rd'),
            'Accept-Language': _0x98f1('15d', 'jn82'),
            'Accept-Encoding': _0x76c970[_0x98f1('15e', 'A9!h')]
        },
        'body': 'body=%7B%22to%22%3A%22https%3A%5C/%5C/lzdz-isv.isvjcloud.com%5C/dingzhi%5C/change%5C/able%5C/activity?activityId%3Ddz2102100001340205%22%2C%22action%22%3A%22to%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone12%2C1&eid=eidIbfcc8121a3sct6%2BZJKZeTX6Kw9Ku2bFIdLevmpw4UcG7PaSe2el%2BDdi10Z8E1MMLqWhuF8xiJDdx1DqRQ44vLt8yni%2BSGFKrEaSQGbBBNtzjHZ1t&isBackground=N&joycious=44&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=385f383ec315d8d01c64a09021df04ef9930c99d&osVersion=14.3&partner=apple&rfs=0000&scope=01&screen=828%2A1792&sign=96ced1a3158cb41dd1b286f706d91554&st=1614917734401&sv=120&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJKfbYxxIwfaVeZuOo3SxuAtrc5hGhwSeyqATNq1sOtuG4KO02ef9RgDJ5p8y14ALu4Wwsq%2BoFpVWgl3hmjwodUgIrZ3wtfzwsoVm7DiN0g8qGHTtfd0Y5An3oFegg2F9Qb1oSKUr0%2BJSivRbuiLomybQjfanl9f2%2B7z7tj8MqOb6RjRBtQKtUvw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=unknown'
    };
    return new Promise(_0x54f8a0 => {
        var _0xb2c24e = {
            'pRVSH': function (_0x2b5970, _0x5f0b9b) {
                return _0x2b5970 === _0x5f0b9b;
            }, 'rBRLo': function (_0x1d63c0) {
                return _0x76c970['KsfvF'](_0x1d63c0);
            }
        };
        $[_0x98f1('15f', 'KWQ@')](_0x481112, (_0x393591, _0x241e16, _0x4daa86) => {
            try {
                if (_0x393591) {
                    console[_0x98f1('160', 'giCj')]('' + JSON[_0x98f1('161', 'MPK!')](_0x393591));
                } else {
                    _0x4daa86 = JSON[_0x98f1('162', '2GYp')](_0x4daa86);
                    if (_0xb2c24e[_0x98f1('163', '3q4J')](_0x4daa86[_0x98f1('164', 'hHDf')], '0')) {
                        $[_0x98f1('165', 'V4rd')] = _0x4daa86[_0x98f1('166', 'xD@)')];
                        cookie = cookie + _0x98f1('167', 'V4rd') + $[_0x98f1('168', '3m7j')];
                    }
                }
            } catch (_0x1c7ec7) {
                console[_0x98f1('169', '@ud(')](_0x1c7ec7, _0x241e16);
            } finally {
                _0xb2c24e['rBRLo'](_0x54f8a0);
            }
        });
    });
}

function grantToken() {
    var _0x299d46 = {
        'iwlRo': function (_0xd96419) {
            return _0xd96419();
        },
        'iZtQz': _0x98f1('16a', 'V4rd'),
        'vtHlY': 'application/x-www-form-urlencoded',
        'GewgF': _0x98f1('16b', 'giCj'),
        'lYSlU': 'keep-alive'
    };
    let _0x157b94 = {
        'url': _0x299d46[_0x98f1('16c', '8AT[')],
        'headers': {
            'Host': _0x98f1('16d', ']sxo'),
            'Content-Type': _0x299d46['vtHlY'],
            'Accept': _0x299d46[_0x98f1('16e', '5R93')],
            'Connection': _0x299d46[_0x98f1('16f', 'giCj')],
            'Cookie': cookie,
            'User-Agent': 'JD4iPhone/167538\x20(iPhone;\x20iOS\x2014.3;\x20Scale/3.00)',
            'Accept-Language': _0x98f1('170', 'V4rd'),
            'Accept-Encoding': _0x98f1('171', 'LOQE')
        },
        'body': _0x98f1('172', 'GrJK')
    };
    return new Promise(_0x1b7296 => {
        $['post'](_0x157b94, (_0x4d24a6, _0x314058, _0x5f4b61) => {
            try {
                if (_0x4d24a6) {
                    console['log']('' + JSON[_0x98f1('173', 'TlVP')](_0x4d24a6));
                } else {
                    _0x5f4b61 = JSON['parse'](_0x5f4b61);
                    if (_0x5f4b61[_0x98f1('174', 'g6z4')] === '0') {
                        $['token'] = _0x5f4b61[_0x98f1('175', 'sBkC')];
                    }
                }
            } catch (_0x1e64f5) {
                console['log'](_0x1e64f5);
            } finally {
                _0x299d46[_0x98f1('176', ']sxo')](_0x1b7296);
            }
        });
    });
}

function getActCookie() {
    var _0x1c3f97 = {
        'IRPhh': _0x98f1('177', 't6QO'),
        'vPVCp': _0x98f1('178', 'ELmL'),
        'eLXtd': _0x98f1('179', 'trB^'),
        'RQlfs': 'keep-alive',
        'XHANh': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS\x2014.3;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
        'JwnPe': 'zh-Hans-CN;q=1',
        'HbRhu': _0x98f1('17a', 't6QO')
    };
    let _0x36cc6f = {
        'url': ACT_URL + _0x98f1('17b', ')S0x') + ACT_ID + _0x98f1('17c', 'L)Ss') + $['authorShareCode'],
        'headers': {
            'Content-Type': _0x1c3f97[_0x98f1('17d', 'xUEu')],
            'Accept': _0x1c3f97[_0x98f1('17e', 'V4rd')],
            'Connection': _0x1c3f97['RQlfs'],
            'Cookie': '' + cookie,
            'User-Agent': _0x1c3f97['XHANh'],
            'Accept-Language': _0x1c3f97[_0x98f1('17f', 'n[M7')],
            'Accept-Encoding': _0x1c3f97[_0x98f1('180', '$Pni')]
        }
    };
    return new Promise(_0x1d11a3 => {
        var _0x1c7d50 = {'VcOHG': _0x1c3f97['IRPhh'], 'lpzHd': _0x98f1('181', 'liq%'), 'aRqMk': _0x98f1('182', 'QCvj')};
        $[_0x98f1('183', 'i%hs')](_0x36cc6f, (_0x17b4a5, _0x4d3c6c, _0x2992f8) => {
            try {
                if (_0x17b4a5) {
                    console[_0x98f1('184', '4c^^')]('' + JSON['stringify'](_0x17b4a5));
                } else {
                    cookie = cookie + ';';
                    if ($['isNode']()) for (let _0x3c8d05 of _0x4d3c6c[_0x1c7d50[_0x98f1('185', 'A9!h')]][_0x1c7d50[_0x98f1('186', 'sBkC')]]) {
                        cookie = '' + cookie + _0x3c8d05['split'](';')[0x0] + ';';
                    } else {
                        for (let _0x2164e1 of _0x4d3c6c[_0x1c7d50[_0x98f1('187', 'B)]]')]][_0x1c7d50['aRqMk']][_0x98f1('188', 'xD@)')](',')) {
                            cookie = '' + cookie + _0x2164e1[_0x98f1('189', '8AT[')](';')[0x0] + ';';
                        }
                    }
                }
            } catch (_0x53a4be) {
                console[_0x98f1('18a', '2GYp')](_0x53a4be);
            } finally {
                _0x1d11a3();
            }
        });
    });
}

function taskPostUrl(_0x2297ad, _0x42d04d) {
    var _0x405eb0 = {
        'EymkL': _0x98f1('18b', '*2j4'),
        'KqbXR': _0x98f1('18c', 'i0Nw'),
        'Pbfej': _0x98f1('18d', 'QCvj'),
        'Evhlz': _0x98f1('18e', '*2j4'),
        'ascfo': _0x98f1('18f', 'g6z4'),
        'WFvgH': _0x98f1('190', 'A*v3'),
        'itWRD': _0x98f1('191', 'A9!h'),
        'KRdIX': _0x98f1('192', '4c^^'),
        'BbQTt': _0x98f1('193', '(4Ec')
    };
    return {
        'url': _0x98f1('194', 'kr9o') + _0x2297ad,
        'headers': {
            'Host': _0x405eb0['EymkL'],
            'Accept': _0x405eb0[_0x98f1('195', 'B)]]')],
            'X-Requested-With': _0x405eb0[_0x98f1('196', 'QCvj')],
            'Accept-Language': _0x405eb0[_0x98f1('197', '*2j4')],
            'Accept-Encoding': _0x405eb0[_0x98f1('198', 'B)]]')],
            'Content-Type': _0x405eb0['WFvgH'],
            'Origin': _0x405eb0['itWRD'],
            'Connection': _0x405eb0[_0x98f1('199', 'GrJK')],
            'Referer': ACT_URL + '?activityId=' + ACT_ID + _0x98f1('19a', 'GrJK') + $['authorShareCode'],
            'Cookie': '' + cookie,
            'User-Agent': _0x405eb0[_0x98f1('19b', 'kr9o')]
        },
        'body': _0x42d04d
    };
}

function checkCookie() {
    var _0x232014 = {
        'vpagZ': _0x98f1('19c', '2B85'),
        'RGDHE': function (_0x8401c1) {
            return _0x8401c1();
        },
        'MQYHb': _0x98f1('19d', 'liq%'),
        'KswIG': 'me-api.jd.com',
        'DdUHq': _0x98f1('19e', 'A9!h'),
        'DTNAM': 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.2\x20Mobile/15E148\x20Safari/604.1',
        'skOSd': _0x98f1('19f', 'ELmL'),
        'sIdvz': 'gzip,\x20deflate,\x20br'
    };
    const _0xf579f8 = {
        'url': _0x232014[_0x98f1('1a0', '(4Ec')],
        'headers': {
            'Host': _0x232014['KswIG'],
            'Accept': _0x232014['DdUHq'],
            'Connection': _0x98f1('1a1', '$Pni'),
            'Cookie': cookie,
            'User-Agent': _0x232014['DTNAM'],
            'Accept-Language': _0x232014['skOSd'],
            'Referer': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
            'Accept-Encoding': _0x232014[_0x98f1('1a2', '3m7j')]
        }
    };
    return new Promise(_0x39ecbe => {
        var _0x4d2e15 = {
            'fmqbo': _0x232014[_0x98f1('1a3', 'ELmL')], 'skSKk': function (_0x50a4ff, _0x4b96e3) {
                return _0x50a4ff === _0x4b96e3;
            }, 'MoNnd': _0x98f1('1a4', '6gz6'), 'FWHmV': _0x98f1('1a5', 'dXRL'), 'kmpXE': function (_0x39e21e) {
                return _0x232014[_0x98f1('1a6', 'LOQE')](_0x39e21e);
            }
        };
        $['get'](_0xf579f8, (_0xab85e6, _0x3d8951, _0x11d2ce) => {
            try {
                if (_0xab85e6) {
                    $[_0x98f1('1a7', ')S0x')](_0xab85e6);
                } else {
                    if (_0x11d2ce) {
                        _0x11d2ce = JSON[_0x98f1('1a8', 'L)Ss')](_0x11d2ce);
                        if (_0x11d2ce[_0x98f1('1a9', 'n[M7')] === _0x4d2e15[_0x98f1('1aa', '(4Ec')]) {
                            $[_0x98f1('1ab', 'VDG%')] = ![];
                            return;
                        }
                        if (_0x4d2e15['skSKk'](_0x11d2ce['retcode'], '0') && _0x11d2ce[_0x98f1('1ac', 'i0Nw')][_0x98f1('1ad', '6gz6')](_0x4d2e15['MoNnd'])) {
                            $[_0x98f1('1ae', 'V4rd')] = _0x11d2ce[_0x98f1('1af', 'ELmL')][_0x98f1('1b0', '@ud(')]['baseInfo'][_0x98f1('1b1', 'i%hs')];
                        }
                    } else {
                        $[_0x98f1('1b2', 'i0Nw')](_0x4d2e15[_0x98f1('1b3', 'B)]]')]);
                    }
                }
            } catch (_0x3e7d0c) {
                $[_0x98f1('1b4', 'QCvj')](_0x3e7d0c);
            } finally {
                _0x4d2e15[_0x98f1('1b5', 'KWQ@')](_0x39ecbe);
            }
        });
    });
};_0xodj = 'jsjiami.com.v6';


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
