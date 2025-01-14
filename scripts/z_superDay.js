/*
洗护发超级品类日
活动入口：https://lzdz-isv.isvjcloud.com/dingzhi/carnival/city/activity?activityId=c8d69c6a780a11ebb588fa163e8623a7
活动时间：2021-03-08 - 2021-03-15

后续发布脚本均有加密
因为我介意别人把我脚本里的助力改了。
如果不愿意助力，可以直接下载脚本到本地，通过修改helpAhtor这个参数来关闭助力请求。
请不要修改我的助力。
脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false

更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/z_superDay.js
已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#超级品类日
13 8,10 8-15 3 * https://raw.githubusercontent.com/i-chenzhe/qx/main/z_superDay.js, tag=超级品类日, enabled=true
================Loon==============
[Script]
cron "13 8,10 8-15 3 *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_superDay.js, tag=超级品类日
===============Surge=================
超级品类日 = type=cron,cronexp="13 8,10 8-15 3 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_superDay.js
============小火箭=========
超级品类日 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_superDay.js, cronexpr="13 8,10 8-15 3 *", timeout=3600, enable=true
 */

const $ = new Env('超级品类日');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '';
let helpAuthor = false;//为作者助力的开关
const ACT_ID = 'c8d69c6a780a11ebb588fa163e8623a7';
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
$.log('脚本版本 v0.6\n更新时间:2021-03-10 01:38\n仓库：https://www.github.com/i-chenzhe/qx');

var _0xodP = 'jsjiami.com.v6',
    _0x1fa3 = [_0xodP, 'wozDgwXDn2k=', 'wpLDr0RtwpVdw6bjgYTkuK7ku5Tot5LljKk=', 'asOQwpXCp8Oy', 'wpgywpXDkcOFV8Kmw7c=', 'PnnCh0xjEzDCmw==', 'w6UbVmbDrDDDrjbCvxw=', 'w5wBwp8t', 'w7EJc2PDpg==', 'EMKobSzDkg==', 'wofDhw4=', 'fCTDuQU=', 'wrfCisKpwrA=', 'w5PDo8Opw5R+wrMNw6fCgSohwpDDojJ/f8O4ZykVwrTCnDN7FkHCrjDDvcOnwoDCjw==', 'YCzDpws=', 'w7rCnjPDqcKIW8Kic8OQHVrDjsK3WlA=', 'RMKIw54gMA==', 'e2jCnsK/', 'wq/CnMOewrFv', 'w6/ClF7CqQ==', 'woPDmsKXCMK3', 'wp8pw7N8', 'w6XCmsOsLQ==', 'RwVIJQ==', 'PHIMwq9Mwr1ld0cxwqFOU8OOwrbDnX5Jw7NjGhVmwpnDh8OqwoU9wpjDp8OzwoYWw7w=', 'w43DmADDmBo=', 'w6vCoA01w5oDwpw9w6w=', 'w5RawpvDjQ==', 'JkTCpVt+', 'w6hjHkgz', 'TMOgw5h3wpo=', 'OsKIwps=', '5b2N5Yqw56Se5Ymeaw==', 'woHCrg1lw6w=', 'UMONMsKPEg==', 'UMOPEiRd', 'w7DDgE/Cr8KS', 'VcK5w58LB8KNwrnCkg==', 'woM+JMKbw4k=', 'w5LDscOJw6I=', '5Li15Lqy6LSN5Yy9', 'wpoqw4HCjcKI4pS96I+c5b6m', 'CW/Cg1A=', 'Mjd5WSAh', 'w5rDusKeIcKPwpLCjMOKcFcqw4LCkcOtw4UHwqpdwocgwqDCimJLw58WOw==', 'w6XChGHCng==', 'w67Ck3/Cp8O4', 'w4QoVnbDpQ==', 'w7XChMKkwqEdE8K5wrLDl2rDig==', 'NDXDvQ5s', 'w6UbW3DDhyvDijbCtw==', 'w4nDvBjDpUXClQ==', 'wqnDtcOiAsKb', 'w4jDsMK5AyY2EsOCw6bCoQIW', 'wowpw65p', 'amZfw5PDosKcw63ChcOnwqN6w4vDlyg=', 'c8KYwr9LJA==', 'wobCscO/woY=', 'ZMK4w5sOBsKH', 'NHQF', 'w4nDo8K/DQ==', 'NnoPwq0=', 'w7bCmsOxOA==', 'esOMBhphYsKMwq00TUXDlQ==', 'wrfDgsK7Dg==', 'wp8sw6l6UsKG', '5LmE5LmU6La85Y+/', 'd8OQAwhQ', 'w7zCksOmMnY7PD8=', 'wrvojrflv6Y=', 'wr3DtcOkEA==', 'dMOawoLCsMO8wqk=', 'w77ClMOi', '5Luf5LuV6L+N5ZqR5Li85LqO5qyA56mj5pS35oyL', 'wp7CogVSw7vDmQ==', 'CcOzJ8KHeA==', '5Lq65LqX6L6T5Zi45LuT5LmG5qyt56uH5pW95o6k', 'woY0woXDjg==', 'fcOPCAFP', 'w7VHNcKQw7HCniDDkyE6w4A=', 'w44DeU/Dsw==', 'AMKsej3Dn8O6w6VwKQ==', 'wrLDlsK7B8Kzw4JsHsKUHcKBw43Cmk3Cnw==', 'JsKGwo7DicOj', 'woolNcKN', 'OcKXwpnDlMOFwqbDrW16e8OGw6Y=', 'w57DocKkHjE=', 'w7HCimbCiw==', 'f2rCmMK5w6A=', 'F8KobS4=', 'ccKNwpQ2E2PChMKh', '5baI57m65a+G5ou/5Yqs6La55Lma5YqB44CS', 'w6Hmi4/ooKXmt7nop6/kvYLlnbPkurnliq4=', 'HSZmYQU=', '5bSr57mb5ayc5omh5oq+5p6l5YWE5LyJ5LiK5YiF44Od', 'wpjmipzoo4nkuZnplJbli7rotbzkuqHli6Y=', 'w5HCnXV7wpk=', 'w4dSwpzDngvDoDR+EsKwI8KHJAcVw7kMdsKNw7EzB8K8wqjCo3JJwqcswqc=', '5bSc57qL5a+N5ou85YeM5rKu5LqF5Yir44OH', 'wpjDq8KZf2M=', '5bSA57iC5a+u5oiH5reG6KWj5ZSr5ZO/5LiR5YiI44Oh', 'ahB3Owc=', 'w5lJJ3Am', '5Lu65Lu76Lyo5Zmk5LiA5LuH5qyq56mz5pWG5o28', 'wpIywpjDncOxXsKiwr3DkMKSwpPCsGHDkcKvw6XCpMKSDsKtwrpIwrzCpcO8w6rDtcKdSU5twqLDtsO/w75/Pg==', 'wokrw65hUsKAwplKAB1J', 'w57Dp8KoHjEPJ8OYw7s=', 'JHdFw7LDnMKfw5rDig==', 'FgpIMjhy', 'dcK5wolgEwA=', 'H8O5Z1Zx', 'cGJfw6nDucKG', 'w6vDh1jCoQ==', 'B2XChQ==', '5LiS5LqP6KyE4oGe5p+Z5reB5YmN5Lur5L2z5peW572A776g6KyP5Yeo5rGM5YSd5LmT5rSF5YmG44GW4oOA', 'w5QJwp48wohU', 'woTDmAzDmHQsKDZ6eQ==', 'Y3nCksKlw4bCr0bDmg==', 'w7xvwo/DisOcQQ==', 'wpYCw64=', '5oux6KCy5YWd5LyY5LmZ5Yu+', 'w5PDthHDhFLClQFv', 'wpzDiQDDgg==', 'w4tzwpTDqxM=', 'w4J1CMKcw58=', 'wokXdHLCpcK5', 'wokkw7ZbUMKIwplGOg==', 'wpo0wpE=', 'MR1iUyc=', 'E8OtDMKfQg==', 'wpPCrhZ+w7/DghlHwqPDjcOe', 'TWvCgUpCAAjCi0vDtMK9', 'w6HCk8OkK10ZPj4i', 'wr/DnkLCpMOX', 'asKzwo1XBAZxw6PCsg==', 'MMO/JsKVPhLDocONaMO3OWbChsKPU0R3BMOHwog0P8KTHcO8', 'w5LDshbDlA==', 'w6fCi8OmF1w=', 'RHbCgsKlWMKfwrhswrzCkQ==', 'wpTCog57w6bDnD5WwoXDmQ==', 'w7jDgkfCmcKewoDCicKUOw==', 'wq7mipXoobvkuI/pl5rlhbnmspnku6vli6Y=', 'ZVHCscK7w4s=', 'wpXCqxF9w5E=', 'YcKpw44QP8KFwqDCjsKfXCg=', 'woPDshzDlFjClR1+w4nCqcKK', 'YyNjRWs=', 'w6oCwpoYwoA=', 'B8OWS29sVzXChCU=', 'w7XCkcKmwqYZNcKVwrfDmzPDhXHCiSY0wrHDtCJxYcKzwqRrw57CrA==', 'bsK3wodR', 'FsOaLQ==', 'b8K/wp1MFSFKw78=', 'wqXDisK8BsKow6NUAw==', 'GG/ClkpEHDrCjQ==', 'AMK9eDvDj8O9', 'VAzDogwz', 'b8Obwp/CpcO+wq4=', 'w7oRXw==', '5Y2V5rSL6KaJw4E=', 'w75rwozDiA==', 'fsKwwp1POQ==', 'YsOdwoXCq8O8wq/Dunpmw4/Cjw==', 'wrPCinHCnm3CuDvCmsKuwq9D', 'w5bDux7DklLCpCdvw4U=', 'wr7CtQcpwoI=', 'LMORQE1k', 'w6jCjiTDs8KCXcKhcsOf', 'woPDpx7Dk1zCszF7w4XDsA==', 'wpwKYEQ=', 'w7XDl8KuHMK3w6ZeGsKACsOZ', 'b8K3woJQBA==', 'VHzCgMKtUsKawqJgw64=', 'woA6wprDj8OuBA==', 'JcObwp3Cp8OnwqPDoHdmw4/Cjw==', 'wofDnsKLVlc=', 'UFFcw5jDmw==', 'w5LCk1t6wpE=', 'YyNrTDMHGMKP', 'GG/CgUxIBg3Cl0w=', 'dcK5wok=', 'wpsJV1vCnQ==', 'eMK6woJ2FRNVw7/Crw==', 'w7/CginDpsKdQcKYNMOSDk3Do8KxSFRiJF7Dt8KIYTzDpsKew6XDjCbCmcKPwqs=', 'w5wdw6DCnW0=', 'YSDDtxI0w6DDqAvDgA==', 'XMOBK8KcZ8OAw5hQdcOuw5PCqgF6FMOQwqXDpFrCisO3w5vDhMKWIg==', 'wonDoCDDokk=', 'Z8OfwoXCow==', 'wpfDicK1cWd0w57CrsKf', 'w7rCjyPDksKMXA==', 'w7/DgUfCpsKFwpbCrsKJJ8OX', 'woTCv8Onwotww707w6vDnT8=', 'w7lFKMKXw4bClCDDgx47', 'esKcwoU5', 'e8OqLsKIFCXDrMOUe8Kv', 'w7zClE7CksOtPWgswojDicOJwq1lw5fDuw==', 'w4dawobDmA==', 'woAJRkzCnA==', 'ScO0w58zwqcXw4HCrDFBasKGw77DjnvDgWTCtTvDhH4Kw4oCTWrDskRAdsOeGA==', 'woDCqSdYw5w=', 'IsK6aQTDow==', 'w5LDvMKXA8KHwog=', 'amJNw7jDsMKAw44=', 'worDmADCmEp2IyYhaQcR', 'wrnCgcKmwqUCWsKFwpfDlmHCmSfClGt7w7bCsUYrPMOyw69lw5fDscKQFsKjwqwNOCXDucK6w5NUw6XCt8KVw4rCpMOWO8KMwrYnAXEAwpQOw7wIw5LCgsKnZHbCjMKhw6bDsFAAbjrDqcOgw7EgGsK4wq7DsX5nwo9NwrfClMKsw6ptwpXDjQI5acO5wpwqwrNkQ0XDojJyA0Qew6/CmsOnacOxdMK1Vxc7w5DDtTPDvMOueirDtUDCscOYEcKlwrLCkkkLwpbDqQnDh8OwQFTDmcO1HcOVFiYYB2bCicKLwqZKQjfCh8OawojDqMOJSmzCjMKdwp8/w7XDmjjDg8K5EsOfw5sAw5zDugHDsnpYwrTDgiTDi8Omdk/CtsO5SzjCrRvDqsK6O8OuwoPDsBAKLMO+w6zCtTPCjcKFV3UkXsOUwocRW8O9wo/Cl8OBwooOB3AcbQE/wqgSw4g0w5xAw6UtwoMTfC1ZW8OMwoBXw47CnifDgwvCncKzG00zZnHDp8K3w6DDrHwWKFzCl8OkFMKcwqvDncKMw7jCvMOmwqphw6/CjMKow5Vfw5LCkEQiDxzCgsKfPMOZbjfDgcOmNlDDgMOaMMOoU8KfbFrCvMKzRCQYXxHCjcKvwofDjF7CscOvwoh8w5bCqcKkdcKxwr9p', 'wr7DrsO5AcOSwoxFdsKXw4jCvsKsw5rCvX5Qwqs=', 'fMOIw5Y=', 'LSd+WyV0U8KdCcO5wqPCtsOWY8OeD8Ocw44vw7nClsO8w7TCoSzDjQQ4wo0sQMKLwqDDmR4/EBkWfzoSGsOaXsKJFcORwoQMw4lgEcK2QXXCgmTCgEhQZcKMwq5iHRLDicOEwrx6w6Uxe8K9w4NRIsKuwrPCtA7DsMKzwqB1YQfCiSQ7JGfChsOnRCDCt8OTw4jDplzCkMKowpBve2XCpDzDgCADwrjDow==', 'w5XCkjDDmMK0', 'SH3Cj8K5R8OTwoJUwrvCjsOiLsOfJVvDo8OXwpXDhsKKwo7CmlnDtXhKEyPCiyvDgSViOHhuwo1DbcOAbcOTH8KKG8O0w54ua8Ofw4zDo8K+ZMOyDcORGXlDwo9fwqolw4dKHmBjFlbCr3pEwqd+OsKuDcK3w6DDkl0pZ8OTwrEUPwXCoMO3wojDosONVSNQSsOqZBvCgwvCtBtdwqIWBcOLwq1fA0vDgMKTU0HCsMKpJxXDiMOQw4UvCF11w65rw6bDqMKJBcKIDmc2w7U0CSjDucOzZDk1wpxjNn7CrmTDgiTDh1Azw6HCvVY1WcKOwoQAwo9iCcK+w4B5ZMKeJcKkw41Bw67DhsK6DEDCucKDw7RTZcKlVA92Z1HDnhzDvcKSwqoAdsOzw4VZwqzDqks/WcKmwozDhXBZXzFWwo0zwq3DosKGIx7DocKLwps0w5HCgsKOEcOBdcKJJRVTwrlgw57Do8OSwpxYw5LDocKURjBwbsOowpHCgsO0w4IAwrxHwpbCk1zCvyvDn8OLZMKMw5MNwpp9wq/DgDd3WcOrw5fCh8KPwoMpw4Ifw4cFKVlPwrPCk2DCgMK1wr8VwoI0w6LDh3weCMK4w6XDoU8rwpHCsXFiGhFdehjDh8KZw4gp', 'w65OwqjDrz4=', 'wrvDl8K7H8KvwooQWcKGB8KLw77CmEzCl24TwoHDrMOawpHDtE3ColrClMO4M8Kfw7tewqEcw7jDgS3ChxHDqMOKMllIw5Qbw7rDiw==', 'UsOFTXNtRhfCuTLCuDLCuMK0ZsKqwqQsw4A0ZmYNSDjCrx/Dr3DDn3Jiw6fDrCVuwqsaw4Uww4t2fcKAwq/CjcO2dsKPwp/Dn8OcCcOHeDfDknDDq0zCkDNLFiohw4bCrirDrldbL8K4R2vDmcK0KnFwasKXwqTDmEXCq8OlARUvw77Cpk3CrX8LBsOqV3JNFcKiEMOnw7tUwqDDqsKkwqEIDgTCtsOpwqbDq2Vew4gpTsKbY2vDm8OcJxLCtCvCpR/DiMOfw40=', 'w7PCjsOxMVcoAjImw6rDq8KRwr3CmcKf', 'f2HCsMKTw7U=', 'w4XDp8KqCBgSGcOU', 'wpHCtcO/w4p8w6UHw6jDmyo=', 'TsKDw4MOEw==', 'KzlnYxg=', 'dsKVw5gQO8KYwrzCk8K3QQ==', 'OsOKX0Ra', 'w7nDo8K4KxE=', 'woDDkcKaIMKZ', 'woUvwoTDk8OlUcKiw7TDig==', 'wo4maEzCpQ==', 'L8OLOMODw50=', 'wojCv8Oiwok=', 'w5fCh1RswpF5Ag==', 'wrvDvcO+FcKrw59EYcKzw4XCrMKxw5zDhxF+wrBTFA==', 'wpDCtcO4wpJzw74=', 'wrvDvcO+FcKxw5xVesKew4rCjcK9w4zDoTFcwqpF', 'w4FSwpzDnSTDuzgjM8KwIsKALic7w5lKZsKQ', 'wos7E0vDq2k+wqTClVIbwohzB8Oxw4rCpB/Ctw==', 'w4QBwp49wohvIw==', 'b8K3woJQBDtF', 'VsONwpTCsMOEwqfDo2Y=', 'U0J7w7nDjw==', 'emjCm8K+w6DCh1A=', 'FcKTahnDrg==', 'w599eMOfwpJ2TcKnw7XClQ==', 'PsKTwojDisO1w73CsCZXYsOcwrzCuMOPM1QQfMOFXF4DQMKDNsKowrhuw4ASOBchw4nDq1jCsmPDrVEaY2QkHcKxAMK5CMK1XHrDpMO+w4rDoA56wqcVw4PCkkrCpVQzw6B+bsKpSkZxwppNwpnDuxVqFcK1A8Ktw7dSVlA=', 'w6N+wpPDhMOGTgJXYA==', 'cMKEwpDDk8OjwqnDqzR+J8KTw7HCucKIPF5KScOPQwIJQ8KEbsO/w6Jywo9Bags7w47CsATDuivCvA0f', 'wrjDvw/DvGk=', 'GMKsfD/Cl8Ovw5lwMQA=', 'w6jCoHHCsMOu', 'w4tPwobDiQLCsnJ+AsK5PsKZIBQZw7dGZ8OKw6hkQsKrw6fCtnhww6kswqQUwqQywptHw7nCoXFmYcODwpvCrE3DusO0wr4=', 'w4TCo8Ojwohvw4MMwr4=', 'wr7Cswspw5sSwr4Aw7vCuMKRw6PCtsOUw4jDhcKPDxoJSsOMLsOYwotOYcOQwpPDuzJCw73DpcKkwpQWP8KBw5nCtsKGwprCp8KaLgPCsCp1wrjCrcKyDToSwqzDhMOZw7PCosKgSkUyw4/DojLDoTPCr8OUWcOEw7/DqsKMwrnDo1zDoybDriBaRiEYwoQGw4LCrRUiwottM8KOA0XDuXzCt0oSwqw4Ej8iTSrDg0FjTj4ww7TDncKnesOTwr9pwrXCtwIrwqvCiMOBwrLDpsK1ChI=', 'w5PCmMO3bX1Aw5nCosKuNsK7w5PDmWTCmw==', 'CcOBOMKGYsOzw4hGaQ==', 'woDCqBFiw6XDnw==', 'w7LCsgMJw7w=', 'w7XDgUw=', 'U8OpOW/ilq4=', 'MsO8M8OUw7lX', 'LTZrTxonEsOX', 'wpEywpDDjsOCWMKtw70=', 'wpfDkMKLTWc=', 'wpnDjRrDg0ss', 'w77Dh03CvsKjwo/Cm8KO', 'w6QbS3fDjis=', 'w4PCm1F7wr1kF38=', 'wrTDisKpG8KQw5lMAg==', 'woofw6DCiTXCo8OiwqTDtCbDpsORBw==', 'wrDDusO0FMKGw6NH', 'w49UwpU=', 'w4MVwpMmwplPM8Ku', 'w4/Dp8KqAg==', 'b8KIwpA2JW/CkcK2', 'ZXMqC+KVgg==', 'b2Jfw6/DtMKVw5g=', 'KTxt', 'w7NlEF4zYMOt', 'wpsWZAzCrcKjw4hwGGk=', '5Lm/5Lq/6Lyb5Zqx5Lma5Lqw5q6K56iM5paF5oyB', 'UnbCncK9', 'YGbCkA==', 'wpHCpMO5wo5xw60Bw6XDiw==', 'w4IBwoA7wog=', 'w5jCkVnCq1c=', 'e8OSwqnCg8O7', 'wqvDscOjBMKSw5g=', 'wprDhcKm', 'wrXDizLDiuKUluWthuaJvuS4lOWJpu+/h+iPieW/lA==', 'w4jCnVA=', 'KsK4cjXDsA==', '5LqG5Lqa6L2m5ZuC5LmR56iM5peW5o6n', 'G2PCjAM=', 'wp/DocKxRl0=', 'wp4rMsKY', 'w4BNNcK1w68=', 'UW3CnMKgWcKPwoJiwqo=', 'woIrJg==', 'woc7HkTDkHs2wrM=', '44CI5Ly35oKB6I6S5Y635omi5Yq+', 'wps3JMKew7Yi', 'w6tpH3M7dQ==', 'w7BFNcKY', 'A8OAJMKiZcOww6hNccK0wofDjVVi', 'WwV2JRk=', '5Lq15LuK6Ly65Zu75Lun5Lmy5q6U56uw5pas5o2M', 'w5EVwoE8woJLIsKlJnHCgcKSecK3dmvDvMOY', 'wr8WwqzDmMOh', 'w6tvAk4=', 'wpEXGH/DjA==', 'XQbDsgY8', 'YMOuKcKCMDTDkcOZ', 'MMO/KMKNMCjCpQ==', 'w6zCmlzCuMOz', 'VcKvayDDl8Oaw4xpIljCtjhX', 'w6jCnzXDqMKJTsKYfcOI', 'BMOSWm5s', 'WMKDwrptPjF+w5/Cj2ckw48=', 'wqvDvcOjGg==', 'LMO2Jw==', 'TnbCiQ==', 'wofDhw7Ds1Uq', 'wprDgsKZJMKe', 'wpbCt010w6bDhgBRwoTChsKEw7nCqjXCmTzCn2XClGpiDR9SwpXCtcK9LQ==', 'w5fDgcKjCMKB', 'w5XDvAzDlA==', 'Z2HCncKMUg==', 'cybDoAknw73DjBvDp3zCjA==', 'w43Dp8KCL8Kbwp3CjMKDag==', 'w6rCoB0yw5MD', 'IMKCwpLDnsOjwrXDlm0=', '5LiP5Lin6Lym5Zmn5Lu35LqI5q+o56ir5pSB5o6/', 'w49UwpXDvAPDug==', 'ecOjw4YxwpQZw4nCog5N', 'w6/Cjj/DtcOIQcKFdsOdQ17DvcKoUlxtaknDt8KTdjzDrcKXw6fDhB7Dk8KEwq3CgMK3wrzCtxHCoTMmMMOFwpoTFMK8UMKpwotFw4jCvFI9LQMVejdrbGZOwqjDqQ==', 'dsKJwoUoIjzDisOgIWjDgA3CsMO8R8OSwqUaTiTDn2nCgMKLwrwNK07CsMKqwr/DkAYPGcKIw63CvcKNcMKywqXDmMOOwoTDjCgSworDowMwORnDonXCvhM/R35ARMOrw5TCiMK1w4l7OsKOBDU=', 'wpjCqQNnw7nCkARuwoLDhsKNw7nDpV/DnmLDgTHDiho1V2UHwp3Cv8KfNcK8w7jCkDnCksKiwpVbC25FwoE0w5puPRZtMMObw7zCrBzDhF/CrMO+K8OWw6fDp8OFwpHDokvCl8KuXwbDkSkrc3vDtXtKKcO9wrw8w5pVw7DDj8OFKsKkwo3DmsKqSwlWw5UsZsOYw7jCksOywp/CjVzCssKdwpwxw6Aow5HCvGjDuBzCixzDvMKFDnDCgHjCicKew6QKFMO1T8OgwqJ8ccOVw6YFLcOdw5NhacKxXUxHw6hNW2c0Z03CuMKUwo7Dnjs0dyfDvMOqJnMhwqLDmkYUwqvCh3jCjcK7woXCpMKGw4rDhmXClhfCvkbDkz9zNAVkwqTCjcOSVMKoDMKdT2VGw6MIHQ7ClcKoGTDCoy9Cw5LDhW3CpV3ChcK7OsOMaEl2XcKpT8K2OcKXHDpWw5Jzw5TDll1+w7TCnsOnWMKuw7XCpMOCw7lywpZ7w77DhB/CtsOfwpJCDcOBwrEfOsK6w5NMw74yDhHDl3Niw7xGwqBUdcKUX8KgF8KfASXCi8Kuw45iwqvCkAHDv0rCpgB9Txo9Q0llU8K2w7rChD8fEcO2XsOHGcKzw7TCrsOhEADDisKDw53CocKnHFFkw6rDmCDCvcK5w75IH8OhwrEHw6VzN00pd0c6MWlrOMK4w7XDu8OGO8O3cG/ClWDCr8K4w7PDmsKQUcKZwqzDhsKKUMOow6RADG0pw4InwqvDtsOGw5E2GsOPw6XDu8KtDsKzw7/DiHHCoBPCsjHDk08Uw5TDnAkuwrnDqMOANsKDY38BUsOYKMKHWMOLw7o=', 'w5fDqsOmJDUVBMKcw5bCjl4CwpzDvA==', 'w4LDtgs=', 'w4HDrcKs', 'wrrDkMKBAMK4w5U=', 'w6vCkEPDsMO+N2kUwoTDmA==', 'WcO2w551wqM=', 'wpjDmAXDn1M=', 'w7vDn8KBL8Kj', 'wpIbPWnCr8Kiw5Q2MkLCtsK3wpE0', 'wrHDoMOkAcKNwpYOPMKQw5TCtsO2w5LCvzRWw7dDDyrDpMKvND3CvcOMw6PClkcNw57DlsKcU0zDgwxCwo/DuSrCgMOLw5jDsMOqScO9f8OQwrrCm8Kxw55dw5vDmEw/', 'wocmCHvDiA==', 'woPCoMO7wot2w6kJw7fDmyB4w5zCri8+bcK2L3dKw7HCkCw/UU7Du27DvMOtw5bDmsKP', 'woYPwqHDm8OI', 'w7PCoAs3wpIWwqA9w7TCrQ==', 'wrjCiVZ+w5nDgwJQwo/ChsOSwqrDqVPDg2nDjyHCmHtpFjhZw4jDusKCDcKAwqrDiiLDi8O4w4gSY0xgwqQVw5pmYFMtaQ==', 'w5fDrsOBw7wewpI1Ei5PBxnDtQrCmDFt', 'w4EUwoAhwoNBLsKxcA==', 'ZRVsBCs=', 'w4bDvBvDhQ==', 'w5DCnVxqwpo=', '5Lqg5LiV6Lyj5ZiV5LiD5LuO5q6B56uE5pWH5o+d', 'HnnCh0xkHDvCkQ==', '5LmO5LuM6L2f5Zi55LqZ56uw5pSY5o+t', 'w73Cn2bCmnHDsEHDgMKqwq5TIlXDji8cMsK4LMKqdDxfLMOzc0zCiMOewrbDgkrCsUHDi8K5J8OYwo/CnifDi23Cm3NIw4jDrmBVRsKLw7cO', 'w7XCkBrCvMOtMSgVwonCk8Oewqtm', 'w5jDokg=', 'K8O8JcORwrhCPyLDpiQ=', 'w5XCmk3CtMOxNGdQw5jCk8KNw6Qjw5nDmClWwo/DjMOGwqvCoMKTwpIBw5zDmx/Dpzh3w4QXAFXCnCcsAy8sw4BqRC7CjcOgExvCncKwwr9CYMKKw7nCv3VqDSLCtncsKxVfw44rwoEPdsOfShTDgsKFSTwDS0vChVTDpUvCusKgwrbDrCLCosOjw6Vhb8KFwpd1NcOUSxHCicKWworCghvCk8OSYsKQwrICVD3CscOtJsKjwot5w50wwrrDgH16cRhNVDU1XMOzPg==', 'FMKzcD/ClsKuw5F8IQnClhxiw6pBLCI=', 'wqULwo/DjMOv', 'w57DkcK9Pw0=', 'wpnCmgtaw6c=', 'wojCpgdjw50=', 'w7DCgUPCrcOuYilQwoXDksOQwqElw53Cpitdw4/DisKSw6bDjMKuwr5rw5HCpBnDrSF6wos1NlvDjHAHWWAuwpZyQmvCrsOkBlrCvsOewq08PMOMw5vDsiM=', 'w6p0ElEe', 'w7NBNQ==', 'wprDhcKmW2dT', 'w6thA0kz', 'w6rCoBokw5ATwqk=', 'S2rCosKmUMKBwoU=', 'w7HDl8KTNMK/', 'w6rCkEPCvsOyPGM=', 'EMOSXHw=', 'PsKGwo/DtcOxwqnDj3tZYsOQw6DCocKY', 'w7ZrOcKRw4Q=', 'HcKgeiTDtMOvw5h8', 'wpLDi8K1fw==', 'NcOqJcOTw5xNNSQ=', 'bsKjw5kSJ8KNwrnCkg==', 'w7TCmlA=', 'w77Cl8OEN3s=', 'w4HDrcKsKSYJ', 'w4XCgkdjwp1pEGQuw6PCqGRPFsODw4E=', 'w65MbMKaw6k=', 'wpfDmsKxcnxCw4rCs8KSLMK8wpjChHrCqMKRw4HCjFo3w4zDjsO/LwIWwqZBw4HCv8O6woTClA==', 'dcKYwpQofGfCicKmO3c=', 'bMKww54DZMKFwqfCgcO4UWbDgsK1w5QMwqTCvyvDtMOcwpPDjQ==', 'XgFMFys=', 'wrjCnsO/wpJu', 'w45sKMKww70=', 'w5Uawps4w4EGI8Kyb3rChcKSUcOiBmDDoA==', 'wq85w5d8SQ==', 'wpIZw73CgyPDjcK0w7vDvRLDo8OGT8OgTlLCpjxcRAPDnEAOw4toccKZwqwv', 'w5vDtsOyw4Bw', 'WBBVISB1w7rDuz1gVsK/EE0PecOCw4gqwqBcwrDCmsOaN8KbwqjDokvCiGc5wppcBsKrZcKsR8OswrhtfsOMdzPDkAvCrT0GdcOhwq9/wqfDnW7ChMKDXsKkwq3DnkLCugzCg2HCrWTCvcKw', 'SC5RCRo=', 'G8K9bT/DicK0wpo2L1DDmQUpwqwFYDPCucOZ', 'w7NeKMKJwqvDlzDDjw4ywpzCvl46wpNzw7c=', 'w7BlFEp7c8Oyw6HCncKt', 'w7/Cj3PCmnLDsQfCv8KvwqQQJh7Cni9CeMKmdMO0LT0ZZMKtb3bCksOMwq7Cn0jDsFDDjcOwCcKGwrrCkCrDmjHDhXJ0w5bDuGByXMKjw6gQEcO9OwvCp8ORdyoywpHCh8OQwpt+w69yw5MYQsOPwp/CrcKfJcKuJcKFwpTCosKcI8OVwqTCqFZZHxjDtcK6elF0THUMBlFPKcOXw5PDq8OGDw0aKQbCvcKkwq3CsSg7OmwUw6vDu0bCn2wNNMK9OcKrwpPDoX3CnBY4asOUURFZwpbDowPDuMOiw53CscOTw7bCpmzDlcO9TFk0fsK2MQg9wqo2w7jCqVsjN8KMw4JBw4PCoMOew5M6w5skQB0PXH3DiTDCgkYiwpgywqDDqcO1wqVZwoQSwovCm8KTw6PDusOpcnITw7Ucw6tdGsKhVDzDlxJxTMK9EsOyw6zCuVTDr8KfPMKlw6E6wpcww5ELBBARH3hqC8KmfRDCvsOzMMKPwqIHQwXDuMObwoHCicOFw4QWwq9lw7Q7BMOrNMKJw7stw7jDlcKKRcOZW8KMw7UYUMOAwprDl8KVRX3CglI=', 'w4gIw58rwoM=', 'wrLDk8K/A8K1w5NeAsKcAMKKwqHCn1rClWI=', '44KI5oyV56WU44GW6K2I5YS/6I275Y6C5Liu5LuU6LeS5Yyp5LqDwpHDhMOCwoUIEWbnm5LmjZTkvaXnl4DDtAdxw4zCo8Ov55uE5LqA5Lq056+p5Yu46Iye5Y6o', 'MG8WwrhFw68jd1E1wrNLHMOAw6zCmHkIw71hGFQrwpjDlMOlw50Nwp7DrsOpwqoWw6zDtFHDh8K7woTDl8ORwoI8', 'bsONwpY=', 'w7zCmsOoPA==', 'w7lTwqvDqMOG', 'w719C8K8w6k=', 'dMK3wppGCQ==', 'w7JuFV8u', 'GsK6VSDDncOnw5s=', 'w7bCnFTCtsOTOWsa', 'w43CnFNqwow=', 'LsOwI8OKw5tCPi4=', 'wqPDmcKkbFtAw4bCog==', 'Gk4Le3llw7/DvnsQ', 'w5nDp8Okw6NVw5s/', '44CG5o2b56W944O3NinDt8OWZMKv5be55aWm5peo', '5LmH5Lq06LWP5Y2B', 'eyvDsAUp', 'RMOvw5F3wpkXw4vCrA==', 'ZRdEIx0uwrjCsQ==', 'Ouiuk+mHrOaXoeeYqOW8muiNouWMgltyRsKxTVdGIMODw4M8wrdYw73Cm8KbKMKbwqjDokvCiGc/wpZTD8O+fsKsD8OhwpBxdMOAeXzDnUfCuj0dYg==', 'w7zCsljCr2w=', 'ezbDmg81w7E=', 'WcOjw5x4wpkZw5LCoAFR', 'I8O2L8OKw7xG5bah5aW65peYYU0Y', 'w4zDnU7CuMKkwoDCkMKE', '5Lqy5Luh6LeX5Y6v', 'w4TDrMKvCSw=', 'w6NXKMKhw4U=', 'w7dvwpU=', 'wrjDrMKlBMKa', 'w6LCsVbCqcO8', 'w6RFM8KKw6I=', 'VWrCh8KRdQ==', 'woYwNcKcw4x8UcKlwqTDlMO3wovDo1jDhGPDm8O2wpPDm8KewqYHA8OWJ8K9NMOjdcO8ZSTDlQ==', 'w7TCm3vDhG/DpATCi8OpwqgRLg==', 'w4JLwoLDlRjDqzwlGMK+P8OGNVwDw6JUOMKCw6o4RcOiwrzCp3t4wqg8wqMfwrE1', 'w5EPUnXDlA==', 'w5jCkMO1H3Q=', 'w5oUwoY4wp4caMO4YSPDisKLGsKkQizDscOQDcKowph5wq/CjFNDwpBpw51FKg7CmHLCq01wwo5FPmERwoXDjMO4PMKbwpMkP8Otw4QbA3vDr8ODO8ObwqguAsOSF8KUZTk/w7fCk8OBQyPCjnZTw47CgzPCt3DCtF7Ct3bDu8Kaw7k+O8K6w6zCv8KddcOFRsKIYQUywqwbKHvDtsOn', 'wp4ww45wRQ==', 'w4t+X1rDjX8pwpjCtl4Nw4Mqc8KcwqrDrwrCrFBxWhfDk8KEw7VRCcOqw5fCl0DCqXZiwqw/VAXDhw==', 'BsKkw4dvwrIEw7bCoAQKI8ONwqjCnDTDjHvCuSzDnklFw5A6GSvDtH5AYMOZGGknEgsbwrRAwpLDi8Ofw73Dkzo=', 'acK5wp1R', 'w57CoFJ8', 'w6YfSnHDhw==', 'wq4wwrLDvcOf', 'woEmCV/DjSB0w7nCtkMBw49iY8OMw6fCtELCoFNwGgrDpMOCw7hAWcK3wofDkgzDtXpiwrIT', 'w7YGwrMGwoM=', 'wpgnw6l8', 'ScOEw7tRwro=', 'bMOPJsKSNA==', 'w7XDi0XCrcKewok=', 'w4gkwpM8wow=', 'w4DCk0Nu', 'wp7CqAxww73Dgw==', 'wpAlw49+Rw==', 'ecO6wpDCtsOr', 'w7pjBXMS', 'w65gIMKNw6Y=', 'w6drwojDmQ==', 'QCDDpw==', 'OcOfMsOAw5w=', 'wpHCpMOqwpNqw7k=', 'CcOYA8Kmfg==', 'w4tRwpjDgBg=', 'w4nDthHDh0PCjw==', 'w7XDhMK+CsK9', 'w7vCgnHCgUzCqwPCig==', 'wobClsKiwqc8AMKBwqI=', 'PMOeUEVO', 'bsOfwoXCocOi', 'wrIAw7HCqxc=', 'd8KTwpU9KQ==', 'phUjsjiamgHi.Jcom.CXBv6ZOlrW=='];
(function (_0x9f90be, _0x3f6233, _0x43cdb1) {
    var _0x43e933 = function (_0x25328f, _0x54276f, _0x1732d6, _0x27e4a1, _0x5d66ae) {
        _0x54276f = _0x54276f >> 0x8, _0x5d66ae = 'po';
        var _0x1bec74 = 'shift', _0xc99583 = 'push';
        if (_0x54276f < _0x25328f) {
            while (--_0x25328f) {
                _0x27e4a1 = _0x9f90be[_0x1bec74]();
                if (_0x54276f === _0x25328f) {
                    _0x54276f = _0x27e4a1;
                    _0x1732d6 = _0x9f90be[_0x5d66ae + 'p']();
                } else if (_0x54276f && _0x1732d6['replace'](/[phUgHJCXBZOlrW=]/g, '') === _0x54276f) {
                    _0x9f90be[_0xc99583](_0x27e4a1);
                }
            }
            _0x9f90be[_0xc99583](_0x9f90be[_0x1bec74]());
        }
        return 0x774a0;
    };
    return _0x43e933(++_0x3f6233, _0x43cdb1) >> _0x3f6233 ^ _0x43cdb1;
}(_0x1fa3, 0x18f, 0x18f00));
var _0x1d31 = function (_0x1fc36e, _0x39ad54) {
    _0x1fc36e = ~~'0x'['concat'](_0x1fc36e);
    var _0x5ec7b4 = _0x1fa3[_0x1fc36e];
    if (_0x1d31['hmrnct'] === undefined) {
        (function () {
            var _0x1db760 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x1d7911 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x1db760['atob'] || (_0x1db760['atob'] = function (_0x215406) {
                var _0x4a1b15 = String(_0x215406)['replace'](/=+$/, '');
                for (var _0x27038c = 0x0, _0x3fcb9a, _0x3891c1, _0x38c089 = 0x0, _0x5c3eee = ''; _0x3891c1 = _0x4a1b15['charAt'](_0x38c089++); ~_0x3891c1 && (_0x3fcb9a = _0x27038c % 0x4 ? _0x3fcb9a * 0x40 + _0x3891c1 : _0x3891c1, _0x27038c++ % 0x4) ? _0x5c3eee += String['fromCharCode'](0xff & _0x3fcb9a >> (-0x2 * _0x27038c & 0x6)) : 0x0) {
                    _0x3891c1 = _0x1d7911['indexOf'](_0x3891c1);
                }
                return _0x5c3eee;
            });
        }());
        var _0xf7922d = function (_0x30d653, _0x39ad54) {
            var _0x469087 = [], _0x371d83 = 0x0, _0x56f9e9, _0x14cd6e = '', _0x57b76a = '';
            _0x30d653 = atob(_0x30d653);
            for (var _0x2a4bd3 = 0x0, _0x15749e = _0x30d653['length']; _0x2a4bd3 < _0x15749e; _0x2a4bd3++) {
                _0x57b76a += '%' + ('00' + _0x30d653['charCodeAt'](_0x2a4bd3)['toString'](0x10))['slice'](-0x2);
            }
            _0x30d653 = decodeURIComponent(_0x57b76a);
            for (var _0x16e52d = 0x0; _0x16e52d < 0x100; _0x16e52d++) {
                _0x469087[_0x16e52d] = _0x16e52d;
            }
            for (_0x16e52d = 0x0; _0x16e52d < 0x100; _0x16e52d++) {
                _0x371d83 = (_0x371d83 + _0x469087[_0x16e52d] + _0x39ad54['charCodeAt'](_0x16e52d % _0x39ad54['length'])) % 0x100;
                _0x56f9e9 = _0x469087[_0x16e52d];
                _0x469087[_0x16e52d] = _0x469087[_0x371d83];
                _0x469087[_0x371d83] = _0x56f9e9;
            }
            _0x16e52d = 0x0;
            _0x371d83 = 0x0;
            for (var _0x11ee85 = 0x0; _0x11ee85 < _0x30d653['length']; _0x11ee85++) {
                _0x16e52d = (_0x16e52d + 0x1) % 0x100;
                _0x371d83 = (_0x371d83 + _0x469087[_0x16e52d]) % 0x100;
                _0x56f9e9 = _0x469087[_0x16e52d];
                _0x469087[_0x16e52d] = _0x469087[_0x371d83];
                _0x469087[_0x371d83] = _0x56f9e9;
                _0x14cd6e += String['fromCharCode'](_0x30d653['charCodeAt'](_0x11ee85) ^ _0x469087[(_0x469087[_0x16e52d] + _0x469087[_0x371d83]) % 0x100]);
            }
            return _0x14cd6e;
        };
        _0x1d31['runhuz'] = _0xf7922d;
        _0x1d31['WmfZms'] = {};
        _0x1d31['hmrnct'] = !![];
    }
    var _0x23beb2 = _0x1d31['WmfZms'][_0x1fc36e];
    if (_0x23beb2 === undefined) {
        if (_0x1d31['nCqdVv'] === undefined) {
            _0x1d31['nCqdVv'] = !![];
        }
        _0x5ec7b4 = _0x1d31['runhuz'](_0x5ec7b4, _0x39ad54);
        _0x1d31['WmfZms'][_0x1fc36e] = _0x5ec7b4;
    } else {
        _0x5ec7b4 = _0x23beb2;
    }
    return _0x5ec7b4;
};
!(async () => {
    var _0x50ccc6 = {
        'kOjkF': 'https://api.r2ray.com/jd.bargain/index',
        'wsiXB': function (_0x395a08) {
            return _0x395a08();
        },
        'QZxpg': _0x1d31('0', ']uF]'),
        'Gqjwv': _0x1d31('1', 'zypR'),
        'eifRV': _0x1d31('2', 'Q0F1'),
        'JkpFL': _0x1d31('3', 'wBE7'),
        'vxTxa': _0x1d31('4', '7CwF'),
        'DfANn': _0x1d31('5', 'Lz)m'),
        'BOybi': _0x1d31('6', 'I^]I'),
        'iYJEn': _0x1d31('7', 'N&hx'),
        'smIIr': function (_0x2dfa7b, _0x1d227a) {
            return _0x2dfa7b(_0x1d227a);
        },
        'gkliN': function (_0x389716, _0x233d02) {
            return _0x389716 + _0x233d02;
        },
        'mfcvF': function (_0x5b2078) {
            return _0x5b2078();
        },
        'cBIMm': function (_0xe8d796, _0x95ca75) {
            return _0xe8d796 !== _0x95ca75;
        },
        'CdUXD': function (_0x5ab01c, _0x1101ca) {
            return _0x5ab01c < _0x1101ca;
        },
        'xmUvc': '0|1|4|2|3',
        'yFraI': function (_0x3e2e80, _0x1dde46) {
            return _0x3e2e80 === _0x1dde46;
        },
        'lCKYZ': function (_0x370a68, _0x2971cc, _0x3e6f5a) {
            return _0x370a68(_0x2971cc, _0x3e6f5a);
        },
        'hjjyi': function (_0x5b062b, _0x176a85) {
            return _0x5b062b < _0x176a85;
        },
        'KWNLH': '3|0|5|7|2|1|4|8|6',
        'HmxXG': function (_0x3d6e52, _0x5da63f) {
            return _0x3d6e52(_0x5da63f);
        },
        'gwKaD': 'yohoo~~\x20好像有点东西进账了'
    };
    if (!cookiesArr[0x0]) {
        $[_0x1d31('8', 'cP%U')]($[_0x1d31('9', 'Zv$L')], _0x50ccc6['BOybi'], _0x50ccc6[_0x1d31('a', 'WVj9')], {'open-url': _0x50ccc6[_0x1d31('b', 'zypR')]});
        return;
    }
    for (let _0x262a1e = 0x0; _0x262a1e < cookiesArr['length']; _0x262a1e++) {
        if (cookiesArr[_0x262a1e]) {
            cookie = cookiesArr[_0x262a1e];
            originCookie = cookiesArr[_0x262a1e];
            $['UserName'] = _0x50ccc6['smIIr'](decodeURIComponent, cookie[_0x1d31('c', 'bA8V')](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $[_0x1d31('d', 'Q0F1')] = _0x50ccc6['gkliN'](_0x262a1e, 0x1);
            $[_0x1d31('e', ']uF]')] = !![];
            $[_0x1d31('f', 'HHs9')] = '';
            await _0x50ccc6['mfcvF'](checkCookie);
            $['log']('\x0a******开始【京东账号' + $[_0x1d31('10', 'AOH2')] + '】' + ($[_0x1d31('11', '&K32')] || $[_0x1d31('12', 'cMsp')]) + _0x1d31('13', 'aD@K'));
            if (!$[_0x1d31('14', 'FKg]')]) {
                $[_0x1d31('8', 'cP%U')]($['name'], _0x1d31('15', 'w5(('), _0x1d31('16', 'ewMy') + $[_0x1d31('17', 'SGdm')] + '\x20' + ($[_0x1d31('18', 'TU8j')] || $[_0x1d31('19', 'aD@K')]) + _0x1d31('1a', 'aD@K'), {'open-url': _0x50ccc6[_0x1d31('1b', 'wBE7')]});
                if ($[_0x1d31('1c', 'SGdm')]()) {
                    await notify[_0x1d31('1d', 'TU8j')]($['name'] + _0x1d31('1e', '&K32') + $[_0x1d31('1f', '8e)N')], _0x1d31('20', 'J(aj') + $[_0x1d31('21', '(@p^')] + '\x20' + $['UserName'] + '\x0a请重新登录获取cookie');
                }
                continue;
            }
            if (helpAuthor) {
                function _0x38b15a() {
                    var _0x5db105 = {
                        'QrRQk': function (_0x2fb342) {
                            return _0x50ccc6[_0x1d31('22', 'zypR')](_0x2fb342);
                        }
                    };
                    return new Promise(_0x2ce54c => {
                        $[_0x1d31('23', 'WVj9')]({'url': _0x50ccc6[_0x1d31('24', 'Lz)m')]}, (_0x357f20, _0x2f7619, _0x474d40) => {
                            try {
                                if (_0x474d40) {
                                    $[_0x1d31('25', 'HHs9')] = JSON[_0x1d31('26', 'zypR')](_0x474d40);
                                }
                                ;
                            } catch (_0x174350) {
                                console['log'](_0x174350);
                            } finally {
                                _0x5db105['QrRQk'](_0x2ce54c);
                            }
                            ;
                        });
                    });
                }

                function _0x45948a(_0x3d6ed3, _0x5812fb) {
                    var _0x295142 = {
                        'XkDGT': function (_0x4d830d) {
                            return _0x50ccc6[_0x1d31('27', '19$7')](_0x4d830d);
                        }
                    };
                    let _0x34b152 = {
                        'url': _0x1d31('28', ')fC*'),
                        'headers': {
                            'Host': _0x1d31('29', 'wBE7'),
                            'Content-Type': _0x1d31('2a', 'Sa4]'),
                            'Origin': _0x50ccc6['QZxpg'],
                            'Accept-Encoding': _0x50ccc6[_0x1d31('2b', '%Mno')],
                            'Cookie': cookie,
                            'Connection': _0x50ccc6['eifRV'],
                            'Accept': 'application/json,\x20text/plain,\x20*/*',
                            'User-Agent': _0x50ccc6[_0x1d31('2c', 'Zv$L')],
                            'Referer': _0x1d31('2d', '7CwF') + _0x3d6ed3 + '&way=0&lng=&lat=&sid=&un_area=',
                            'Accept-Language': _0x50ccc6[_0x1d31('2e', 'mQhA')]
                        },
                        'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + _0x3d6ed3 + _0x1d31('2f', 'N7Jh') + _0x5812fb + _0x1d31('30', 'TU8j')
                    };
                    return new Promise(_0x5145a6 => {
                        $[_0x1d31('31', 'bA8V')](_0x34b152, (_0x3d9edd, _0x224e0a, _0x2f1022) => {
                            if (_0x2f1022) {
                                $[_0x1d31('32', 'AOH2')] = JSON[_0x1d31('33', '%Mno')](_0x2f1022);
                                _0x295142[_0x1d31('34', 'il9l')](_0x5145a6);
                            }
                            ;
                        });
                    });
                }

                function _0x16ab88(_0x5340a6, _0x4bab87) {
                    let _0x113cec = {
                        'url': _0x1d31('35', 'N7Jh'),
                        'headers': {'Content-Type': _0x50ccc6[_0x1d31('36', '7CwF')]},
                        'body': JSON['stringify']({'actID': _0x5340a6, 'actsID': _0x4bab87, 'done': 0x1})
                    };
                    return new Promise(_0x460c57 => {
                        $[_0x1d31('37', 'mQhA')](_0x113cec, (_0x4cd95a, _0x2a659a, _0x26517e) => {
                            _0x460c57();
                        });
                    });
                }

                await _0x38b15a();
                if (_0x50ccc6[_0x1d31('38', 'TU8j')]($[_0x1d31('39', 'w5((')]['data'][_0x1d31('3a', '8e)N')], 0x0)) {
                    for (let _0x262a1e = 0x0; _0x50ccc6['CdUXD'](_0x262a1e, $[_0x1d31('3b', '7CwF')][_0x1d31('3c', 'AOH2')][_0x1d31('3d', 'I6Mw')]); _0x262a1e++) {
                        var _0x340212 = _0x50ccc6[_0x1d31('3e', 'mQhA')]['split']('|'), _0x3b1ae4 = 0x0;
                        while (!![]) {
                            switch (_0x340212[_0x3b1ae4++]) {
                                case'0':
                                    actID = $[_0x1d31('3f', 'cP%U')]['data'][_0x262a1e][_0x1d31('40', 'Q0F1')];
                                    continue;
                                case'1':
                                    actsID = $[_0x1d31('41', 'zypR')]['data'][_0x262a1e]['actsID'];
                                    continue;
                                case'2':
                                    await $[_0x1d31('42', 'WVj9')](0x5dc);
                                    continue;
                                case'3':
                                    if ($[_0x1d31('43', 'SGdm')] && _0x50ccc6[_0x1d31('44', '&K32')]($['Res'][_0x1d31('45', '6P]Q')], 0x4)) {
                                        await _0x50ccc6['lCKYZ'](_0x16ab88, actID, actsID);
                                    }
                                    continue;
                                case'4':
                                    await _0x45948a(actID, actsID);
                                    continue;
                            }
                            break;
                        }
                    }
                    ;
                }
                ;
            }
            ;await _0x50ccc6[_0x1d31('46', '1&hi')](superDay, ![]);
        }
    }
    for (let _0x166efc = 0x0; _0x50ccc6[_0x1d31('47', 'Sa4]')](_0x166efc, cookiesArr[_0x1d31('48', 'uzYq')]); _0x166efc++) {
        if (cookiesArr[_0x166efc]) {
            var _0x19f24e = _0x50ccc6[_0x1d31('49', 'F9YZ')]['split']('|'), _0x58bda2 = 0x0;
            while (!![]) {
                switch (_0x19f24e[_0x58bda2++]) {
                    case'0':
                        originCookie = cookiesArr[_0x166efc];
                        continue;
                    case'1':
                        $[_0x1d31('4a', 'wBE7')] = '';
                        continue;
                    case'2':
                        $['isLogin'] = !![];
                        continue;
                    case'3':
                        cookie = cookiesArr[_0x166efc];
                        continue;
                    case'4':
                        await checkCookie();
                        continue;
                    case'5':
                        $[_0x1d31('4b', 'WnUw')] = _0x50ccc6[_0x1d31('4c', 'a*Gl')](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie[_0x1d31('4d', 'cP%U')](/pt_pin=(.+?);/)[0x1]);
                        continue;
                    case'6':
                        await _0x50ccc6[_0x1d31('4e', '69SR')](superDay, !![]);
                        continue;
                    case'7':
                        $[_0x1d31('4f', 'J(aj')] = _0x50ccc6[_0x1d31('50', 'ewMy')](_0x166efc, 0x1);
                        continue;
                    case'8':
                        $['log'](_0x1d31('51', 'I^]I') + $[_0x1d31('52', 'cP%U')] + '】' + ($[_0x1d31('53', 'il9l')] || $[_0x1d31('54', 'PK&H')]) + '\x20开始抽奖\x20*********\x0a');
                        continue;
                }
                break;
            }
        }
    }
    if (message !== '') {
        if ($['isNode']()) {
            await notify[_0x1d31('55', '%Mno')]($['name'], message);
        } else {
            $['msg']($[_0x1d31('56', '7CwF')], _0x50ccc6[_0x1d31('57', '%Mno')], message);
        }
    }
})()[_0x1d31('58', ']uF]')](_0x37c528 => {
    $[_0x1d31('59', 'ewMy')]('', '❌\x20' + $[_0x1d31('5a', 'SGdm')] + ',\x20失败!\x20原因:\x20' + _0x37c528 + '!', '');
})['finally'](() => {
    $[_0x1d31('5b', 'WnUw')]();
});

async function superDay(_0x14c5c1) {
    var _0x484db4 = {
        'DBdYy': _0x1d31('5c', '6P]Q'), 'MLUVp': function (_0x1b3677) {
            return _0x1b3677();
        }, 'PyXgk': function (_0x4a2233) {
            return _0x4a2233();
        }, 'NquIu': function (_0x59cbde, _0x1a155e, _0x1f617f) {
            return _0x59cbde(_0x1a155e, _0x1f617f);
        }, 'MNGeS': function (_0x514957, _0x310a51) {
            return _0x514957 > _0x310a51;
        }, 'ffjkM': function (_0x2806c4, _0x538fe5) {
            return _0x2806c4 / _0x538fe5;
        }, 'FFuiG': function (_0xe8071f) {
            return _0xe8071f();
        }, 'mzewv': function (_0x2af917, _0x2cf1d4) {
            return _0x2af917 > _0x2cf1d4;
        }
    };
    $[_0x1d31('5d', 'SGdm')] = ![];
    $[_0x1d31('5e', 'LV28')] = _0x484db4[_0x1d31('5f', 'ETL9')];
    $['bean'] = 0x0;
    await grantToken();
    await $[_0x1d31('60', 'PKz%')](0x5dc);
    await _0x484db4[_0x1d31('61', '6P]Q')](getActCookie);
    await $[_0x1d31('62', 'HHs9')](0x5dc);
    await _0x484db4[_0x1d31('63', 'Lz)m')](getActInfo);
    await $[_0x1d31('64', 'mQhA')](0x5dc);
    await _0x484db4['PyXgk'](getMyPing);
    if (!$['risk']) {
        await $[_0x1d31('65', 'Zv$L')](0x5dc);
        await getUserInfo();
        await $[_0x1d31('66', 'aD@K')](0x5dc);
        await getActContent(![], $['userShareCode']);
        await _0x484db4['NquIu'](doTask, _0x1d31('67', 'N&hx'), 'activityId=' + ACT_ID + _0x1d31('68', 'ewMy') + encodeURIComponent($[_0x1d31('69', 'I^]I')]));
        await $[_0x1d31('6a', 'Sa4]')](0x5dc);
        await getOpenCardList();
        if (_0x14c5c1) {
            if (_0x484db4[_0x1d31('6b', 'PK&H')]($[_0x1d31('6c', 'Q0F1')], 0x12c)) {
                times = parseInt(_0x484db4[_0x1d31('6d', 'TU8j')]($['score'], 0x12c));
                $[_0x1d31('6e', '*ci)')](_0x1d31('6f', 'J(aj') + $[_0x1d31('70', 'I6Mw')] + ',开始抽奖');
                for (let _0x189a99 = 0x0; _0x189a99 < times; _0x189a99++) {
                    await _0x484db4[_0x1d31('71', 'w5((')](draw);
                    await $['wait'](0x7d0);
                }
            }
        } else {
            await _0x484db4[_0x1d31('72', 'QESR')](getActContent, !![], $['userShareCode']);
        }
    } else {
        message += '京东账号' + $[_0x1d31('73', '8e)N')] + '-' + $[_0x1d31('74', 'ETL9')] + '\x0a\x20\x20\x20\x20京东说‘本活动与你无缘，请关注其他活动。’\x0a\x0a';
    }
    if (_0x484db4[_0x1d31('75', ')fC*')]($[_0x1d31('76', 'FKg]')], 0x0)) {
        message += _0x1d31('77', '8e)N') + $['index'] + '-' + $['nickName'] + _0x1d31('78', 'WVj9') + $[_0x1d31('79', 'PK&H')] + '个京豆\x0a\x0a';
    }
}

function draw() {
    var _0xeaddb2 = {
        'jNQnE': _0x1d31('7a', 'qJ[%'), 'sFmht': function (_0x11a42d) {
            return _0x11a42d();
        }, 'vfHze': function (_0x339371, _0x3fe2b5, _0x39a379) {
            return _0x339371(_0x3fe2b5, _0x39a379);
        }, 'RVntG': _0x1d31('7b', 'F9YZ'), 'ZLwqX': function (_0x3c5c47, _0x402cb0) {
            return _0x3c5c47(_0x402cb0);
        }
    };
    return new Promise(_0x56ef85 => {
        $[_0x1d31('7c', 'wBE7')](_0xeaddb2[_0x1d31('7d', 'HHs9')](taskPostUrl, _0xeaddb2[_0x1d31('7e', '%Mno')], 'activityId=' + ACT_ID + _0x1d31('7f', 'WnUw') + $['shareCode'] + _0x1d31('80', 'SGdm') + _0xeaddb2['ZLwqX'](encodeURIComponent, $[_0x1d31('81', '%Mno')])), (_0x171fee, _0x170af1, _0x75fdd2) => {
            try {
                if (_0x171fee) {
                    $[_0x1d31('82', 'uzYq')](_0x171fee);
                } else {
                    if (_0x75fdd2) {
                        _0x75fdd2 = JSON[_0x1d31('83', 'OeUs')](_0x75fdd2);
                        $['log'](_0x75fdd2[_0x1d31('84', '(@p^')]);
                        if (_0x75fdd2[_0x1d31('85', 'mQhA')][_0x1d31('86', '2Z@]')](_0xeaddb2[_0x1d31('87', 'bA8V')])) {
                            if (_0x75fdd2[_0x1d31('88', '6P]Q')]['wdsrvo'][_0x1d31('89', 'ETL9')]) {
                                $[_0x1d31('8a', 'N&hx')]('\x20\x20\x20\x20-yohoo~\x20恭喜获得' + _0x75fdd2[_0x1d31('8b', '(@p^')]['wdsrvo'][_0x1d31('8c', 'N&hx')]);
                                if (_0x75fdd2[_0x1d31('8d', 'Zv$L')]['wdsrvo'][_0x1d31('8e', 'QESR')] === 0x6) {
                                    $['bean'] += _0x75fdd2[_0x1d31('8f', 'Lz)m')][_0x1d31('90', 'mQhA')]['drawInfo']['beanNum'];
                                } else {
                                    message += _0x1d31('91', 'mQhA') + $[_0x1d31('92', 'QESR')] + '-' + $[_0x1d31('93', 'Zv$L')] + _0x1d31('94', 'Q0F1') + _0x75fdd2[_0x1d31('95', 'OeUs')][_0x1d31('96', 'cP%U')]['name'] + '\x0a';
                                }
                            } else {
                                $[_0x1d31('97', 'Zv$L')]('\x20\x20\x20\x20└花费300积分，抽了个寂寞～');
                            }
                        }
                    } else {
                        $['log'](_0x1d31('98', ']uF]'));
                    }
                }
            } catch (_0x47c496) {
                $[_0x1d31('99', 'I6Mw')](_0x47c496);
            } finally {
                _0xeaddb2[_0x1d31('9a', '1&hi')](_0x56ef85);
            }
        });
    });
}

function getOpenCardList() {
    var _0x11f34d = {
        'iyKGE': _0x1d31('9b', 'w5(('), 'cqolg': function (_0x11b1a1, _0x379b36, _0x40871b) {
            return _0x11b1a1(_0x379b36, _0x40871b);
        }, 'aGPCt': function (_0xb52e3d, _0x34e213) {
            return _0xb52e3d(_0x34e213);
        }
    };
    return new Promise(_0x179c34 => {
        var _0xaa9c6f = {'hJlwS': _0x11f34d['iyKGE']};
        $[_0x1d31('9c', 'il9l')](_0x11f34d[_0x1d31('9d', 'QESR')](taskPostUrl, 'dingzhi/carnival/city/initOpenCard', _0x1d31('9e', 'zypR') + ACT_ID + _0x1d31('9f', '0(]0') + _0x11f34d['aGPCt'](encodeURIComponent, $[_0x1d31('a0', ']uF]')]) + '&shareUuid=' + $[_0x1d31('a1', 'Lz)m')]), (_0x180694, _0xdaa141, _0x3e676a) => {
            try {
                if (_0x180694) {
                    $['logErr'](_0x180694);
                } else {
                    if (_0x3e676a) {
                        _0x3e676a = JSON[_0x1d31('a2', '*ci)')](_0x3e676a);
                        if (_0x3e676a['result']) {
                            $['openCardList'] = _0x3e676a[_0x1d31('a3', ')fC*')][_0x1d31('a4', '*ci)')];
                            $[_0x1d31('a5', '(@p^')] = _0x3e676a[_0x1d31('a6', 'wBE7')][_0x1d31('a7', 'PKz%')];
                            $['bean'] += _0x3e676a[_0x1d31('a8', ']uF]')][_0x1d31('a9', 'J(aj')];
                        }
                    } else {
                        $['log'](_0xaa9c6f['hJlwS']);
                    }
                }
            } catch (_0x42df4c) {
                $['logErr'](_0x42df4c);
            } finally {
                _0x179c34();
            }
        });
    });
}

async function getActContent(_0xabf8c2 = !![], _0x53b2d9 = '') {
    var _0xe6a687 = {
        'XulJS': function (_0x2f2aa0, _0x18dbfa) {
            return _0x2f2aa0 === _0x18dbfa;
        }, 'ZWRup': function (_0x5b220e) {
            return _0x5b220e();
        }, 'uoBtm': function (_0x1e0dc5, _0x3b7621) {
            return _0x1e0dc5(_0x3b7621);
        }, 'augpP': _0x1d31('aa', '1&hi'), 'DyPzS': function (_0x2a963b, _0x3229db) {
            return _0x2a963b > _0x3229db;
        }, 'nAXav': function (_0x33d01a, _0x4d65e0) {
            return _0x33d01a + _0x4d65e0;
        }, 'ZtVjT': _0x1d31('ab', 'ewMy'), 'BIVJp': '已经完成浏览会场任务。'
    };
    return new Promise(_0x2bb331 => {
        var _0x28f477 = {
            'kJOKx': function (_0x8e9012, _0x29f1a3) {
                return _0xe6a687[_0x1d31('ac', 'qJ[%')](_0x8e9012, _0x29f1a3);
            },
            'hHfRb': function (_0x454527) {
                return _0xe6a687['ZWRup'](_0x454527);
            },
            'VQIeX': _0x1d31('ad', 'OeUs'),
            'tNhxq': _0x1d31('ae', 'Zv$L'),
            'iXFpN': function (_0x544268, _0x581ae2, _0x41078d) {
                return _0x544268(_0x581ae2, _0x41078d);
            },
            'XbhPm': function (_0xd01589, _0x23d01a) {
                return _0xe6a687[_0x1d31('af', 'AOH2')](_0xd01589, _0x23d01a);
            },
            'upcNd': _0xe6a687['augpP'],
            'gfsjX': _0x1d31('b0', 'Sa4]'),
            'zwJvu': _0x1d31('b1', ')fC*'),
            'FIvlb': function (_0x52457b, _0x8224d9) {
                return _0xe6a687['DyPzS'](_0x52457b, _0x8224d9);
            },
            'qtJHB': function (_0x546b89, _0x9dec22) {
                return _0x546b89(_0x9dec22);
            },
            'RVpDN': function (_0x54adc2, _0x191635) {
                return _0xe6a687[_0x1d31('b2', 'cMsp')](_0x54adc2, _0x191635);
            },
            'vHwmR': function (_0x4b3500, _0x822333) {
                return _0x4b3500(_0x822333);
            },
            'szGzS': _0x1d31('b3', 'I6Mw'),
            'sUzWK': _0xe6a687[_0x1d31('b4', 'aD@K')],
            'bHITn': _0xe6a687[_0x1d31('b5', 'Q0F1')],
            'hzVmR': _0x1d31('b6', '*ci)'),
            'lAijg': function (_0x55a99a, _0x5535a2) {
                return _0x55a99a(_0x5535a2);
            }
        };
        $['post'](taskPostUrl(_0x1d31('b7', 'il9l'), _0x1d31('b8', 'mQhA') + ACT_ID + '&pin=' + encodeURIComponent($[_0x1d31('b9', '(@p^')]) + _0x1d31('ba', '2Z@]') + $['pinImg'] + _0x1d31('bb', 'aD@K') + $['nickName'] + '&cjyxPin=&cjhyPin=&shareUuid=' + _0x53b2d9), async (_0x55f54e, _0x254ce6, _0x1dbb6a) => {
            try {
                if (_0x55f54e) {
                    $[_0x1d31('bc', 'bA8V')](_0x55f54e);
                } else {
                    if (_0x1dbb6a) {
                        _0x1dbb6a = JSON['parse'](_0x1dbb6a);
                        if (_0x28f477[_0x1d31('bd', 'a*Gl')](_0x1dbb6a[_0x1d31('be', '2Z@]')], ![])) {
                            $[_0x1d31('bf', '8e)N')] = !![];
                            console[_0x1d31('c0', 'PK&H')](_0x1d31('c1', 'F9YZ'));
                            return;
                        }
                        if (_0xabf8c2) {
                            if ($['openCardList']) {
                                openCardList = $['openCardList'][_0x1d31('c2', '7CwF')](_0x795720 => _0x795720[_0x1d31('c3', 'ewMy')] === ![] && _0x795720[_0x1d31('c4', 'PKz%')] === ![]);
                                if (openCardList[_0x1d31('c5', 'WVj9')] > 0x0) {
                                    $[_0x1d31('c6', '69SR')](_0x1d31('c7', '%Mno'));
                                    for (const _0x367146 of openCardList) {
                                        await shopMember(_0x367146['venderId'], _0x367146[_0x1d31('c8', 'uzYq')]);
                                        await $[_0x1d31('c9', 'ewMy')](0xbb8);
                                    }
                                    await _0x28f477[_0x1d31('ca', 'Sa4]')](getOpenCardList);
                                } else {
                                    $['log'](_0x28f477[_0x1d31('cb', 'zypR')]);
                                }
                            }
                            if ($[_0x1d31('cc', '0(]0')]) {
                                if (!$['addSku'][_0x1d31('cd', 'mQhA')]) {
                                    $[_0x1d31('ce', 'il9l')](_0x28f477[_0x1d31('cf', 'qJ[%')]);
                                    await _0x28f477[_0x1d31('d0', '1&hi')](doTask, _0x1d31('b0', 'Sa4]'), _0x1d31('d1', 'I6Mw') + ACT_ID + _0x1d31('d2', 'PK&H') + $[_0x1d31('d3', 'Zv$L')] + _0x1d31('d4', '8e)N') + _0x28f477['XbhPm'](encodeURIComponent, $[_0x1d31('d5', 'bA8V')]) + _0x1d31('d6', 'w5(('));
                                    await $[_0x1d31('d7', 'uzYq')](0xbb8);
                                } else {
                                    $['log'](_0x28f477[_0x1d31('d8', 'Zv$L')]);
                                }
                            }
                            if ($[_0x1d31('d9', '19$7')]) {
                                if (!$[_0x1d31('da', 'I6Mw')][_0x1d31('db', '8e)N')]) {
                                    $['log'](_0x1d31('dc', 'AOH2'));
                                    await _0x28f477[_0x1d31('dd', 'PKz%')](doTask, _0x28f477[_0x1d31('de', 'I6Mw')], _0x1d31('df', 'ETL9') + ACT_ID + _0x1d31('e0', 'uzYq') + $['shareCode'] + _0x1d31('e1', 'qJ[%') + _0x28f477[_0x1d31('e2', '7CwF')](encodeURIComponent, $[_0x1d31('e3', 'a*Gl')]) + _0x1d31('e4', 'WnUw'));
                                    await $[_0x1d31('e5', 'bA8V')](0xbb8);
                                } else {
                                    $[_0x1d31('e6', '1&hi')](_0x28f477['zwJvu']);
                                }
                            }
                            if ($[_0x1d31('e7', 'bA8V')]) {
                                list = $[_0x1d31('e8', 'Lz)m')][_0x1d31('e9', 'PK&H')]['filter'](_0x26ce5d => _0x26ce5d[_0x1d31('ea', ']uF]')] === 0x0);
                                if (_0x28f477[_0x1d31('eb', 'SGdm')](list[_0x1d31('ec', 'cP%U')], 0x0)) {
                                    for (const _0x5d7be0 of list) {
                                        $[_0x1d31('ed', '%Mno')](_0x1d31('ee', ')fC*') + _0x5d7be0[_0x1d31('ef', 'WVj9')]['substr'](0x0, 0xa));
                                        await doTask(_0x28f477[_0x1d31('f0', 'bA8V')], _0x1d31('f1', 'cP%U') + ACT_ID + _0x1d31('f2', 'wBE7') + $[_0x1d31('f3', 'uzYq')] + _0x1d31('f4', 'I^]I') + _0x28f477[_0x1d31('f5', 'a*Gl')](encodeURIComponent, $[_0x1d31('f6', 'LV28')]) + _0x1d31('f7', 'uzYq') + _0x5d7be0[_0x1d31('f8', '0(]0')] + _0x1d31('f9', 'Lz)m') + _0x5d7be0[_0x1d31('fa', 'bA8V')]);
                                        await _0x28f477[_0x1d31('f5', 'a*Gl')](insertCrmPageVisit, _0x1d31('fb', '19$7') + _0x5d7be0[_0x1d31('fc', 'il9l')] + _0x1d31('fd', 'cP%U') + _0x28f477[_0x1d31('fe', 'cMsp')](encodeURIComponent, _0x28f477[_0x1d31('ff', '2Z@]')]('商品', _0x5d7be0[_0x1d31('100', 'AOH2')])) + _0x1d31('101', 'qJ[%') + ACT_ID + '&pin=' + _0x28f477['vHwmR'](encodeURIComponent, $[_0x1d31('102', 'PK&H')]));
                                        await $['wait'](0xbb8);
                                    }
                                } else {
                                    $[_0x1d31('103', 'bA8V')](_0x28f477[_0x1d31('104', '0(]0')]);
                                }
                            }
                            if ($['mainActive']) {
                                if (!$['mainActive'][_0x1d31('105', 'bA8V')]) {
                                    $['log'](_0x28f477['sUzWK']);
                                    await doTask(_0x1d31('106', 'LV28'), 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + _0x1d31('107', '69SR') + encodeURIComponent($[_0x1d31('108', 'SGdm')]) + _0x1d31('109', '1&hi'));
                                    await $[_0x1d31('64', 'mQhA')](0xbb8);
                                } else {
                                    $[_0x1d31('6e', '*ci)')](_0x28f477[_0x1d31('10a', 'ewMy')]);
                                }
                            }
                        } else {
                            $[_0x1d31('d3', 'Zv$L')] = _0x1dbb6a[_0x1d31('10b', 'cP%U')][_0x1d31('10c', 'cMsp')];
                            $[_0x1d31('10d', 'LV28')] = _0x1dbb6a['data']['addSku'];
                            $[_0x1d31('10e', '8e)N')] = _0x1dbb6a[_0x1d31('a6', 'wBE7')][_0x1d31('10f', '6P]Q')];
                            $['visitSku'] = _0x1dbb6a['data']['visitSku'];
                            $[_0x1d31('110', 'zypR')] = _0x1dbb6a[_0x1d31('111', 'J(aj')][_0x1d31('112', 'w5((')];
                            $[_0x1d31('113', 'HHs9')] = _0x1dbb6a[_0x1d31('114', 'Sa4]')]['dayOpenSettings'];
                        }
                    } else {
                        $[_0x1d31('ed', '%Mno')](_0x28f477[_0x1d31('115', '0(]0')]);
                    }
                }
            } catch (_0x3aa57f) {
                $[_0x1d31('99', 'I6Mw')](_0x3aa57f, _0x254ce6);
            } finally {
                _0x28f477['lAijg'](_0x2bb331, _0x1dbb6a);
            }
        });
    });
}

function insertCrmPageVisit(_0x8f3484) {
    var _0x5b689e = {
        'rdEOU': function (_0x34810a, _0x27c5c1, _0x35aa2a) {
            return _0x34810a(_0x27c5c1, _0x35aa2a);
        }, 'QspKY': _0x1d31('116', 'TU8j')
    };
    return new Promise(_0x48c62c => {
        $['post'](_0x5b689e[_0x1d31('117', 'I6Mw')](taskPostUrl, _0x5b689e[_0x1d31('118', ']uF]')], _0x8f3484), (_0x31ba6f, _0x277fdb, _0x118bd4) => {
            try {
                if (_0x31ba6f) {
                    $['logErr'](_0x31ba6f);
                }
            } catch (_0xc54f38) {
                $[_0x1d31('119', 'F9YZ')](_0xc54f38);
            } finally {
                _0x48c62c();
            }
        });
    });
}

function shopMember(_0x10ce47, _0x54d936) {
    var _0x2a4f61 = {
        'JdOMC': _0x1d31('11a', '2Z@]'),
        'NIywZ': 'v_name',
        'njmHN': 'v_sex',
        'NywYS': _0x1d31('11b', 'ewMy'),
        'TasGE': _0x1d31('11c', 'WnUw'),
        'MuZVO': 'zh-cn',
        'shGXp': _0x1d31('11d', 'OeUs'),
        'SrUOE': function (_0x3a46ea) {
            return _0x3a46ea();
        },
        'SvjPh': _0x1d31('11e', '*ci)')
    };
    let _0x1f74db = {
        'url': _0x1d31('11f', 'qJ[%') + _0x10ce47 + '%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': _0x2a4f61[_0x1d31('120', 'LV28')],
            'Accept': _0x2a4f61['SvjPh'],
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': _0x1d31('121', '19$7'),
            'Accept-Language': _0x2a4f61[_0x1d31('122', 'Sa4]')],
            'Referer': _0x1d31('123', 'Lz)m') + _0x10ce47 + '&shopId=' + _0x54d936 + _0x1d31('124', 'a*Gl') + ACT_ID + '%26shareUuid%3D' + $[_0x1d31('125', 'Zv$L')],
            'Accept-Encoding': _0x2a4f61[_0x1d31('126', 'PKz%')]
        }
    };
    return new Promise(_0x47d0bc => {
        var _0x1fd46f = {
            'tUrHn': _0x1d31('127', '(@p^'),
            'fUxmk': _0x2a4f61['JdOMC'],
            'oRxbH': _0x1d31('128', '6P]Q'),
            'TqJTf': _0x2a4f61[_0x1d31('129', 'ETL9')],
            'QEWeZ': _0x2a4f61[_0x1d31('12a', 'qJ[%')],
            'fZsVT': _0x1d31('12b', 'ETL9'),
            'SWfJN': _0x2a4f61[_0x1d31('12c', 'a*Gl')],
            'uomnA': '*/*',
            'pUFms': _0x2a4f61[_0x1d31('12d', '(@p^')],
            'SEXSM': _0x2a4f61['MuZVO'],
            'Teqkp': _0x2a4f61['shGXp'],
            'EIkHk': function (_0x2bd3a2) {
                return _0x2a4f61[_0x1d31('12e', 'Lz)m')](_0x2bd3a2);
            }
        };
        $['get'](_0x1f74db, async (_0x513816, _0x1ae599, _0x5eb8c1) => {
            var _0x2abc7a = {
                'jwmNC': _0x1fd46f['tUrHn'], 'azJSr': function (_0x5bfcd2, _0x44ff0c) {
                    return _0x5bfcd2 !== _0x44ff0c;
                }
            };
            try {
                if (_0x513816) {
                    console['log']('' + JSON[_0x1d31('12f', 'il9l')](_0x513816));
                } else {
                    _0x5eb8c1 = JSON['parse'](_0x5eb8c1);
                    if (_0x1ae599[_0x1fd46f[_0x1d31('130', '0(]0')]][_0x1fd46f[_0x1d31('131', '&K32')]]) {
                        cookie = _0x1ae599[_0x1fd46f['fUxmk']]['set-cookie'][_0x1d31('132', '6P]Q')](';') + ';\x20' + originCookie;
                    }
                    if (_0x5eb8c1[_0x1d31('133', 'AOH2')]) {
                        $[_0x1d31('134', 'OeUs')] = _0x5eb8c1[_0x1d31('135', '6P]Q')][_0x1d31('136', 'OeUs')][_0x1d31('137', 'Sa4]')];
                        registerExtend = {};
                        for (const _0x4e0df7 of $[_0x1d31('138', 'N7Jh')]) {
                            if (_0x4e0df7['isRequired']) {
                                switch (_0x4e0df7[_0x1d31('139', '7CwF')]) {
                                    case _0x1fd46f['TqJTf']:
                                        registerExtend[_0x4e0df7[_0x1d31('13a', 'bA8V')]] = '小' + $[_0x1d31('13b', 'cP%U')]['substr'](0x0, 0x2);
                                        break;
                                    case _0x1fd46f[_0x1d31('13c', '2Z@]')]:
                                        registerExtend[_0x4e0df7[_0x1d31('13d', 'PKz%')]] = '男';
                                        break;
                                    case _0x1fd46f[_0x1d31('13e', ']uF]')]:
                                        registerExtend[_0x4e0df7['valueId']] = _0x1d31('13f', ')fC*');
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                        let _0x1f74db = {
                            'url': _0x1d31('140', '*ci)') + encodeURIComponent(JSON[_0x1d31('141', 'WVj9')]({
                                'venderId': _0x10ce47,
                                'shopId': _0x54d936,
                                'bindByVerifyCodeFlag': 0x1,
                                'registerExtend': registerExtend,
                                'writeChildFlag': 0x0,
                                'channel': 0x191
                            })) + _0x1d31('142', '*ci)'),
                            'headers': {
                                'Host': _0x1fd46f[_0x1d31('143', 'ewMy')],
                                'Accept': _0x1fd46f['uomnA'],
                                'Connection': _0x1d31('144', ']uF]'),
                                'Cookie': cookie,
                                'User-Agent': _0x1fd46f[_0x1d31('145', 'HHs9')],
                                'Accept-Language': _0x1fd46f['SEXSM'],
                                'Referer': _0x1d31('146', 'Sa4]') + _0x10ce47 + _0x1d31('147', '6P]Q') + _0x54d936 + _0x1d31('148', 'I^]I') + ACT_ID + _0x1d31('149', 'cMsp') + $['authorShareCode'],
                                'Accept-Encoding': _0x1fd46f['Teqkp']
                            }
                        };
                        return new Promise(_0x47d0bc => {
                            $['get'](_0x1f74db, (_0x513816, _0x1ae599, _0x5eb8c1) => {
                                try {
                                    if (_0x513816) {
                                        console[_0x1d31('e6', '1&hi')]('' + JSON[_0x1d31('14a', '1&hi')](_0x513816));
                                    } else {
                                        _0x5eb8c1 = JSON['parse'](_0x5eb8c1);
                                        if (_0x5eb8c1[_0x1d31('133', 'AOH2')]) {
                                            if (_0x5eb8c1[_0x1d31('14b', 'I6Mw')]) {
                                                if (_0x5eb8c1['result']['hasOwnProperty'](_0x2abc7a[_0x1d31('14c', 'I^]I')])) {
                                                    $[_0x1d31('14d', '8e)N')](_0x1d31('14e', ']uF]') + _0x5eb8c1[_0x1d31('14f', '&K32')][_0x1d31('150', 'qJ[%')]);
                                                }
                                                if (_0x5eb8c1[_0x1d31('14b', 'I6Mw')][_0x1d31('86', '2Z@]')](_0x1d31('151', 'il9l'))) {
                                                    if (_0x2abc7a[_0x1d31('152', 'cMsp')](_0x5eb8c1[_0x1d31('153', 'ewMy')][_0x1d31('154', '8e)N')], null)) {
                                                        for (const _0x493dc6 of _0x5eb8c1[_0x1d31('155', '%Mno')][_0x1d31('156', 'AOH2')][_0x1d31('157', 'Lz)m')]) {
                                                            if (_0x493dc6[_0x1d31('158', '69SR')][_0x1d31('159', 'OeUs')]('京豆')) {
                                                                $[_0x1d31('15a', 'Sa4]')]('恭喜获得' + _0x493dc6[_0x1d31('15b', '7CwF')] + '京豆');
                                                                $[_0x1d31('15c', '(@p^')] += _0x493dc6[_0x1d31('15d', 'J(aj')];
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                $['log'](_0x1d31('15e', 'qJ[%') + _0x5eb8c1[_0x1d31('15f', '2Z@]')]);
                                            }
                                        }
                                    }
                                } catch (_0x5d4bdc) {
                                    console[_0x1d31('160', 'qJ[%')](_0x5d4bdc, _0x1ae599);
                                } finally {
                                    _0x47d0bc();
                                }
                            });
                        });
                    }
                }
            } catch (_0x361f5a) {
                console['log'](_0x361f5a, _0x1ae599);
            } finally {
                _0x1fd46f['EIkHk'](_0x47d0bc);
            }
        });
    });
}

function doTask(_0x3b0230, _0x53281d) {
    var _0x267c62 = {
        'MzKAU': _0x1d31('161', 'Q0F1'),
        'xlXAq': _0x1d31('162', '0(]0'),
        'YqkzJ': _0x1d31('163', 'Lz)m'),
        'TbxeP': function (_0x4bd9ea) {
            return _0x4bd9ea();
        },
        'zkkdC': function (_0x1485aa, _0x2200c3, _0x577314) {
            return _0x1485aa(_0x2200c3, _0x577314);
        }
    };
    return new Promise(_0x39156c => {
        $[_0x1d31('164', '19$7')](_0x267c62['zkkdC'](taskPostUrl, _0x3b0230, _0x53281d), (_0x52f77a, _0x4ebbe2, _0x5c9925) => {
            try {
                if (_0x52f77a) {
                    console[_0x1d31('165', 'PKz%')]('' + JSON[_0x1d31('166', '6P]Q')](_0x52f77a));
                } else {
                    if (_0x5c9925) {
                        _0x5c9925 = JSON[_0x1d31('167', '7CwF')](_0x5c9925);
                        if (_0x4ebbe2[_0x267c62['MzKAU']][_0x267c62['xlXAq']]) {
                            cookie = _0x4ebbe2[_0x267c62[_0x1d31('168', 'wBE7')]][_0x267c62[_0x1d31('169', 'cP%U')]]['join'](';') + ';\x20' + originCookie;
                        }
                        if (_0x5c9925[_0x1d31('16a', 'OeUs')]) {
                            $[_0x1d31('16b', 'cMsp')](_0x1d31('16c', 'wBE7') + _0x5c9925[_0x1d31('8b', '(@p^')] + '积分\x0a');
                        }
                    } else {
                        $[_0x1d31('16d', 'AOH2')](_0x267c62[_0x1d31('16e', ']uF]')]);
                    }
                }
            } catch (_0x22231d) {
                console['log'](_0x22231d, _0x4ebbe2);
            } finally {
                _0x267c62['TbxeP'](_0x39156c);
            }
        });
    });
}

function getUserInfo() {
    var _0x542437 = {
        'VWHXM': _0x1d31('16f', 'TU8j'), 'kaWtJ': function (_0x2910e7, _0x35f913) {
            return _0x2910e7(_0x35f913);
        }, 'iKpXH': function (_0x4fbde1, _0x1df8ac) {
            return _0x4fbde1(_0x1df8ac);
        }, 'TitLh': function (_0x6a542c, _0x28a10c, _0x343062) {
            return _0x6a542c(_0x28a10c, _0x343062);
        }, 'pFeiY': 'wxActionCommon/getUserInfo'
    };
    return new Promise(_0x5f5830 => {
        let _0xb980c1 = _0x1d31('170', 'PK&H') + _0x542437[_0x1d31('171', 'cMsp')](encodeURIComponent, $['secretPin']);
        $[_0x1d31('172', ')fC*')](_0x542437[_0x1d31('173', 'zypR')](taskPostUrl, _0x542437['pFeiY'], _0xb980c1), async (_0x5b1529, _0x4b5224, _0x1bf7e2) => {
            try {
                if (_0x5b1529) {
                    console[_0x1d31('e6', '1&hi')]('' + JSON[_0x1d31('174', '19$7')](_0x5b1529));
                } else {
                    if (_0x1bf7e2) {
                        _0x1bf7e2 = JSON['parse'](_0x1bf7e2);
                        if (_0x1bf7e2['data']) {
                            console[_0x1d31('175', ')fC*')]('用户【' + _0x1bf7e2['data'][_0x1d31('176', 'N7Jh')] + _0x1d31('177', 'bA8V'));
                            $[_0x1d31('178', ')fC*')] = _0x1bf7e2['data']['id'];
                            $[_0x1d31('179', 'Q0F1')] = _0x1bf7e2[_0x1d31('17a', 'zypR')][_0x1d31('17b', '1&hi')];
                        } else {
                            console[_0x1d31('175', ')fC*')](_0x1bf7e2);
                        }
                    } else {
                        $[_0x1d31('97', 'Zv$L')](_0x542437['VWHXM']);
                    }
                }
            } catch (_0x575c90) {
                $['logErr'](_0x575c90, _0x4b5224);
            } finally {
                _0x542437[_0x1d31('17c', 'aD@K')](_0x5f5830, _0x1bf7e2);
            }
        });
    });
}

function getMyPing() {
    var _0x1cb023 = {
        'uDUvV': _0x1d31('17d', 'bA8V'), 'IMZbj': function (_0x344833) {
            return _0x344833();
        }, 'xEePr': function (_0x55e252, _0x398f31, _0x23cfcd) {
            return _0x55e252(_0x398f31, _0x23cfcd);
        }, 'OCffm': _0x1d31('17e', '7CwF')
    };
    return new Promise(_0x1a3137 => {
        var _0x5e3f2f = {
            'sNSAD': _0x1cb023['uDUvV'], 'IaVKB': function (_0x1028f1) {
                return _0x1cb023[_0x1d31('17f', 'il9l')](_0x1028f1);
            }
        };
        $[_0x1d31('180', 'Q0F1')](_0x1cb023[_0x1d31('181', 'N7Jh')](taskPostUrl, _0x1cb023[_0x1d31('182', 'SGdm')], 'userId=' + $[_0x1d31('183', 'w5((')] + _0x1d31('184', 'w5((') + $[_0x1d31('185', 'HHs9')] + _0x1d31('186', ']uF]')), async (_0x20c521, _0xdbc0ee, _0x25a270) => {
            try {
                if (_0x20c521) {
                    console['log']('' + JSON[_0x1d31('187', 'LV28')](_0x20c521));
                } else {
                    if (_0x25a270) {
                        _0x25a270 = JSON[_0x1d31('188', 'a*Gl')](_0x25a270);
                        if (_0x25a270['result']) {
                            $['secretPin'] = _0x25a270[_0x1d31('88', '6P]Q')]['secretPin'];
                            cookie = _0x1d31('189', 'bA8V') + $['secretPin'] + ';' + cookie;
                        } else {
                            $[_0x1d31('18a', 'OeUs')] = !![];
                            $[_0x1d31('18b', '&K32')](_0x25a270['errorMessage']);
                        }
                    } else {
                        $[_0x1d31('18c', '19$7')](_0x5e3f2f['sNSAD']);
                    }
                }
            } catch (_0x3b08f9) {
                $[_0x1d31('18d', 'ewMy')](_0x3b08f9, _0xdbc0ee);
            } finally {
                _0x5e3f2f[_0x1d31('18e', 'Lz)m')](_0x1a3137);
            }
        });
    });
}

function getActInfo() {
    var _0x1b864d = {
        'iRSNt': function (_0xd5311b) {
            return _0xd5311b();
        }, 'ExsEe': function (_0x2fae4a, _0x39085f, _0x5dfcb5) {
            return _0x2fae4a(_0x39085f, _0x5dfcb5);
        }, 'FQpKF': _0x1d31('18f', 'I6Mw')
    };
    return new Promise(_0x2aee0f => {
        var _0xc23884 = {
            'ryxkP': function (_0xf56b74) {
                return _0x1b864d[_0x1d31('190', 'F9YZ')](_0xf56b74);
            }
        };
        $[_0x1d31('191', 'uzYq')](_0x1b864d[_0x1d31('192', '19$7')](taskPostUrl, _0x1b864d['FQpKF'], _0x1d31('193', 'SGdm') + ACT_ID), (_0x146ae2, _0x10a694, _0x256804) => {
            try {
                if (_0x146ae2) {
                    console['log']('' + JSON[_0x1d31('194', 'F9YZ')](_0x146ae2));
                } else {
                    if (_0x256804) {
                        _0x256804 = JSON['parse'](_0x256804);
                        if (_0x256804[_0x1d31('195', 'I^]I')]) {
                            $[_0x1d31('196', '*ci)')] = _0x256804['data'][_0x1d31('c8', 'uzYq')];
                        }
                    } else {
                        $[_0x1d31('e6', '1&hi')](_0x1d31('197', 'Sa4]'));
                    }
                }
            } catch (_0x5a4fd1) {
                $[_0x1d31('198', 'Sa4]')](_0x5a4fd1, _0x10a694);
            } finally {
                _0xc23884['ryxkP'](_0x2aee0f);
            }
        });
    });
}

function getActCookie() {
    var _0x2d590d = {
        'djdjZ': 'headers', 'mhNCD': _0x1d31('199', 'TU8j'), 'ELqiV': function (_0x5c8ccc) {
            return _0x5c8ccc();
        }, 'TeWGD': _0x1d31('19a', 'LV28'), 'QsDaz': 'keep-alive'
    };
    let _0x58fac1 = {
        'url': _0x1d31('19b', 'J(aj') + ACT_ID,
        'headers': {
            'Content-Type': 'text/plain',
            'Accept': _0x2d590d['TeWGD'],
            'Connection': _0x2d590d['QsDaz'],
            'Cookie': '' + cookie,
            'User-Agent': _0x1d31('19c', 'I6Mw'),
            'Accept-Language': _0x1d31('19d', '(@p^'),
            'Accept-Encoding': 'gzip,\x20deflate,\x20br'
        }
    };
    return new Promise(_0x42ee99 => {
        $[_0x1d31('19e', 'uzYq')](_0x58fac1, (_0x495607, _0x55785b, _0x5cde6f) => {
            try {
                if (_0x495607) {
                    console[_0x1d31('19f', '(@p^')]('' + JSON['stringify'](_0x495607));
                } else {
                    cookie = cookie + ';';
                    if ($[_0x1d31('1a0', 'Lz)m')]()) for (let _0x567084 of _0x55785b[_0x2d590d['djdjZ']][_0x1d31('1a1', 'HHs9')]) {
                        cookie = '' + cookie + _0x567084['split'](';')[0x0] + ';';
                    } else {
                        for (let _0x2707af of _0x55785b[_0x2d590d['djdjZ']][_0x2d590d['mhNCD']][_0x1d31('1a2', 'TU8j')](',')) {
                            cookie = '' + cookie + _0x2707af[_0x1d31('1a3', 'ewMy')](';')[0x0] + ';';
                        }
                    }
                }
            } catch (_0x5d908a) {
                console[_0x1d31('c0', 'PK&H')](_0x5d908a);
            } finally {
                _0x2d590d[_0x1d31('1a4', 'F9YZ')](_0x42ee99);
            }
        });
    });
}

function grantToken() {
    var _0x89f951 = {
        'UqMUx': function (_0x118b17, _0x111e45) {
            return _0x118b17 === _0x111e45;
        }, 'ntuTv': _0x1d31('29', 'wBE7'), 'pTWaC': '*/*', 'GMVpD': _0x1d31('1a5', '0(]0')
    };
    let _0x1d0978 = {
        'url': _0x1d31('1a6', 'OeUs'),
        'headers': {
            'Host': _0x89f951[_0x1d31('1a7', 'N7Jh')],
            'Content-Type': _0x1d31('1a8', '6P]Q'),
            'Accept': _0x89f951[_0x1d31('1a9', 'il9l')],
            'Connection': _0x1d31('1aa', 'I^]I'),
            'Cookie': cookie,
            'User-Agent': _0x1d31('1ab', 'I6Mw'),
            'Accept-Language': _0x89f951['GMVpD'],
            'Accept-Encoding': _0x1d31('1ac', 'FKg]')
        },
        'body': 'body=%7B%22url%22%3A%22https%3A%5C%2F%5C%2Flzkjdz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167541&client=apple&clientVersion=9.4.0&openudid=385f383ec315d8d01c64a09021df04ef9930c99d&sign=b747c2565aca50d1e1dfb3544a9e04c8&st=1613530023543&sv=100'
    };
    return new Promise(_0x41e661 => {
        $['post'](_0x1d0978, (_0x3ace65, _0x236b5f, _0x4e412f) => {
            try {
                if (_0x3ace65) {
                    console[_0x1d31('e6', '1&hi')]('' + JSON[_0x1d31('1ad', '7CwF')](_0x3ace65));
                } else {
                    if (_0x4e412f) {
                        _0x4e412f = JSON['parse'](_0x4e412f);
                        if (_0x89f951[_0x1d31('1ae', 'aD@K')](_0x4e412f[_0x1d31('1af', 'uzYq')], '0')) {
                            $['token'] = _0x4e412f[_0x1d31('1b0', 'AOH2')];
                        }
                    } else {
                        $[_0x1d31('59', 'ewMy')](_0x1d31('1b1', 'PKz%'));
                    }
                }
            } catch (_0x4b9b81) {
                console[_0x1d31('ed', '%Mno')](_0x4b9b81);
            } finally {
                _0x41e661();
            }
        });
    });
}

function checkCookie() {
    var _0x3bd17a = {
        'ODcrJ': function (_0x4549ad, _0x590509) {
            return _0x4549ad === _0x590509;
        },
        'bOxhC': _0x1d31('1b2', 'PK&H'),
        'llAnC': _0x1d31('1b3', '6P]Q'),
        'sQruA': function (_0x35b6b3) {
            return _0x35b6b3();
        },
        'SPyvd': _0x1d31('1b4', 'wBE7'),
        'JXVJF': _0x1d31('1b5', 'HHs9'),
        'SKGxI': _0x1d31('1b6', 'I6Mw'),
        'sSvSY': _0x1d31('1b7', '&K32'),
        'kWiMn': _0x1d31('1b8', 'HHs9'),
        'zketT': 'zh-cn',
        'qtckH': _0x1d31('1b9', ']uF]')
    };
    const _0x5540d5 = {
        'url': _0x3bd17a[_0x1d31('1ba', 'il9l')],
        'headers': {
            'Host': _0x3bd17a['JXVJF'],
            'Accept': _0x3bd17a['SKGxI'],
            'Connection': _0x3bd17a[_0x1d31('1bb', '(@p^')],
            'Cookie': cookie,
            'User-Agent': _0x3bd17a[_0x1d31('1bc', 'I6Mw')],
            'Accept-Language': _0x3bd17a[_0x1d31('1bd', 'I6Mw')],
            'Referer': _0x1d31('1be', 'HHs9'),
            'Accept-Encoding': _0x3bd17a[_0x1d31('1bf', 'Q0F1')]
        }
    };
    return new Promise(_0x25af00 => {
        $[_0x1d31('1c0', 'zypR')](_0x5540d5, (_0x469a63, _0x154c15, _0x1cb772) => {
            try {
                if (_0x469a63) {
                    $[_0x1d31('1c1', 'cMsp')](_0x469a63);
                } else {
                    if (_0x1cb772) {
                        _0x1cb772 = JSON[_0x1d31('1c2', 'Q0F1')](_0x1cb772);
                        if (_0x1cb772[_0x1d31('1c3', 'I^]I')] === '1001') {
                            $[_0x1d31('1c4', '19$7')] = ![];
                            return;
                        }
                        if (_0x3bd17a[_0x1d31('1c5', 'F9YZ')](_0x1cb772[_0x1d31('1c6', 'HHs9')], '0') && _0x1cb772[_0x1d31('1c7', 'a*Gl')][_0x1d31('1c8', '*ci)')](_0x3bd17a[_0x1d31('1c9', 'zypR')])) {
                            $[_0x1d31('1ca', ']uF]')] = _0x1cb772[_0x1d31('1cb', 'cMsp')][_0x1d31('1cc', '&K32')]['baseInfo'][_0x1d31('1cd', 'ETL9')];
                        }
                    } else {
                        $[_0x1d31('1ce', 'HHs9')](_0x3bd17a[_0x1d31('1cf', 'Zv$L')]);
                    }
                }
            } catch (_0x5b4053) {
                $[_0x1d31('1d0', '(@p^')](_0x5b4053);
            } finally {
                _0x3bd17a['sQruA'](_0x25af00);
            }
        });
    });
}

function taskPostUrl(_0x5df9bd, _0x8c11fd) {
    var _0x1ac7f1 = {
        'nemFx': _0x1d31('1d1', 'AOH2'),
        'ZNtuq': 'XMLHttpRequest',
        'ZHiIz': _0x1d31('1d2', 'zypR'),
        'GqMtm': _0x1d31('1d3', 'cMsp'),
        'kbZLB': _0x1d31('1d4', 'J(aj'),
        'xJpXI': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS\x2014.3;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1'
    };
    return {
        'url': 'https://lzdz-isv.isvjcloud.com/' + _0x5df9bd,
        'headers': {
            'Host': _0x1d31('1d5', 'ETL9'),
            'Accept': _0x1ac7f1[_0x1d31('1d6', 'aD@K')],
            'X-Requested-With': _0x1ac7f1[_0x1d31('1d7', '6P]Q')],
            'Accept-Language': _0x1ac7f1[_0x1d31('1d8', 'zypR')],
            'Accept-Encoding': _0x1d31('1d9', '7CwF'),
            'Content-Type': _0x1ac7f1[_0x1d31('1da', 'mQhA')],
            'Origin': _0x1d31('1db', '69SR'),
            'Connection': _0x1ac7f1[_0x1d31('1dc', 'FKg]')],
            'Referer': _0x1d31('1dd', 'aD@K') + ACT_ID,
            'Cookie': '' + cookie,
            'User-Agent': _0x1ac7f1[_0x1d31('1de', 'aD@K')]
        },
        'body': _0x8c11fd
    };
};_0xodP = 'jsjiami.com.v6';

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
