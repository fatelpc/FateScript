const $ = new Env('百变大咖秀');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '';
let helpAuthor = false; //为作者助力的开关
const ACT_ID = 'dz2102100001340205';
const questionList = [
    {q: '28f1ba1fa63c40fdb350b2bbf86dacb7', a: 'B:金靖'},
    {q: '3d0f9bef43314552ba9137b6157584a9', a: 'B:白凯南'},
    {q: '4fc4e9810f7a4fa1948de6e361d9cf2e', a: 'B:李维嘉'},
    {q: '9e48fdb85b14410ab18754467034a330', a: 'B:瞿颖'},
    {q: '9fb1e0b6c3114916a91e2fbb37f1a127', a: 'A:王琳'},
    {q: 'a5e321821334491c87b6b32becc79c5b', a: 'A:倪萍'},
    {q: 'bc520102bad14028b8246399927ad1e5', a: 'B:黄龄'},
    {q: 'cb1f87f9925340a59d461944635a2a1a', a: 'C:张远'},
    {q: 'd6539f6bc1bd49f8a233e70bbeaca0a6', a: 'A:王菊'}
]
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
$.log('脚本版本 v0.2\n更新时间:2021-03-10 21:10\n仓库：https://www.github.com/i-chenzhe/qx');
var _0xodh = 'jsjiami.com.v6',
    _0x443e = [_0xodh, 'w7lCe8O2Dg==', 'Um/DocOgw78=', 'H3nCsU7Cvw==', 'GH7CtkDCicK6SMOT', 'GsOQw5c=', 'wq7DscKhw7zDtQ==', 'wqs/w7BSw7bDvQ7Dng==', 'bcOmwqdcw70uBMK9', 'w5/Cog/CgMK8wrfCtEUvEg==', 'eQ58wrjDvh9p', 'wpjDu0I=', 'TMO9DsK9', '5Li45Lie6LaX5Y26', 'w6xKBsK7wrU=', 'AcOfwrlwTMKYGBg=', 'NsOcwozDlS7DkxJn', 'J+ivmOmGtuaUueeanuW+mOiNgeWMnsOYwptXDsKWw4xBwrstO8Kbw4N9wr9+w69qw4UXBygdXxzCr8Kywq8nwrk/Hk4ww4HCtjtMQcKnM8OxXcOTw64=', 'w5F5U21t', 'UnkyJ8OWw4M=', 'w6dnw5/DqS3CnSbCmUDCsQ==', 'b8OhYcKfwpnCkeW3juWngeaUpMOqDcK3', 'w5IDwqvCmMK8wo3DpCc=', '5LqX5LiW6LWa5Y6/', 'wo3orofphIPmlZrnmonlvrnojL7ljpTCgQR5wobCgUU=', 'UAbDkD8Cw78=', 'w5pyKcOUDFF/w4DCtUg=', '6L+u6KO45ay45om9', '6L6t6KC85a2P5omW', '5aSP5YKO5p6a54O35YWh5Lm26KSJ6L6c6LWg5LmP', 'wp0Xw7wQw4Q=', 'U2HDsg==', 'VWsRLQ==', 'EH7Cu0rCq8K3XA==', 'XRrDsDU=', 'w7Vyw5jCow7DnDjClAjCqxFI', 'FcOPwoXCoMOHGsKvwoPDgMOJwo7DlMOVCQdzw7kzw6rChcKbccONKMO+w6EQwrfCrMKPw5nCoTY8LMOwwqDCkMKQw7EnGMOtG8Olw5dESsKOw4t/dBksPCfCvcO0PgV3UF7DpXwgBcOPw7giJcODOsONw7VDworDi1jCtkw8IBFpwrvCuMOzwo3ClArDgsKvwod+Syc2w7AEw7PCqcOOO8Kjw7/Dq2VOw77DuMKvw7Zzw6PDrDHDncO3wpJjw7diwp9tw4fCnAPDrXvCocKawpjDgcKEwpUrBEBREsKXacK5wrnDgsKbDxXDuGBNw65kNFxnQMObw7bCkcKNdsKHw4LCnR7DjBXCiBvCnkDDisOhwqvCvG1jw4c/V8OwfmxawpPCqsKxXMKyw4Bhw7zDkcKuwovCjV08wrEoKBkSw5jDrcKDXcOEw6/Chz8ZGWJ6MDnDhExswqEqAU03csOzwqBCEGzCqRYJT8K8wo9hYCTDpl7CoGvCrMOqWMKJw7TCtSpiwoQdw4XCsMO9w57CkCfCvTpvwp0EI8K5FMOsHw/DvsK/wpwdID/CkntJwpgoNXrDsDJdVw==', 'wr8+wr5aw5Y=', 'Vk04w60MJFHDnEd9wpZaw4bDsmLChcKbwoFKBsOow43Drzp7woNDw5/CrMOUU8KHwoNNeGfDng==', 'w4/Cv2gvNMKoSMO+wo1NAMOWw7lQw6U2', 'wrXDtsK2w7I=', 'w7Znw5DDow==', 'WgrDkHFU', 'wokXw6EH', 'wo3DuF/DnMOj', 'w7ARwqfCng==', 'w5/CuWIiPA==', 'wqrCnEUD', 'R0k2w4XCiw==', 'ByHDnsKWwr43w4NDRMO0woTCo2s=', 'w7VOwrBRLQ==', 'KsO+Z8Kaw40=', 'wpfCk1QWwpI=', 'woLDtMOkwoHDl8OdMXnDmw==', 'w7RVwrVr', 'ScOVw50Z', 'SmRtwq/CiA==', 'VcO9CsKs', 'M8OuwrPCh8On', 'TsOzBA==', 'w6dLbsOnA23ChE3Dgg==', 'wo0ew6kBw4lMWsOgNQ==', 'wojCjkkFwr0cbSg=', 'BXLCu0/CicK0UcOfw7nDmQ==', 'AcOXwrd+', '6L2p6KCp5a685oqi', '5LuP5Lqz6LeP5Y2Q', 'wqgkKT0Z', 'an3DsMOxw5kYe2c=', 'w752bFg=', '5Liv5Lio6Kyo4oCH5p2g5reW5Yuh5Lq+5L6R5pSc576Z77276Ky95Yef5rOS5YSP5Lm35rWe5YuN44Gg4oGY', 'wp0Sw5A+w7g=', 'worCg8OwDg==', 'GuS7keS4rOi3seWNrg==', 'wq3DnybDscOl', 'AsOuwo/DpRg=', 'w65mwoxJCA==', 'w7cRwrzCmcKX', 'ER/CpA==', 'wp3DvFHDmsOlwqfCsUBkaMOUw7sJNsOVwpLCk3N6wp/CosOLFCBHw5vDm8Knw73Cg27DjADCvA==', 'wqDDi8KTw4nDuQ==', 'wrcnw4tdw4I=', 'ezhnwq3Dqg==', 'e8OGw44sw5g=', 'w5FNwptJLw==', 'wqHCr8OyfMKSLmnCtcKvAsOUwpFQw4bDgsKaw5JHwpDCt03DjsOnw4LCosKfOnHCt27CgwXDgA==', 'RVsPw7nClsO3w5nDp8K6w4YNF8OIw5UfwrphNsKTwo1xw7BxwqRsw6VQHWgqFQvCucO8w7VSwoFiI1APw4DCgSxRPcKEacK3ZsOuw69Iwq5nwrBYGG19w4/DoXouCn3DhDPDqcOJwrHCs8KGw4hpwqt4BmLDsAkSW1nDr04YQW/DssKcIUvCv8KPWwhxDcKcwow6wo3Dj1TDjcOt', 'HwLDvylbwqrCrmPCssKzwovDs8KGS8ODfCsuYsOpw4d2w4vCqsOXw70eZsKqw7g=', 'GsK5w6Bbw4AqG8KWwrETwowQb8KRw6rDgMKXwrvCncOiwpbCpMOMw7LDr2MBQsK8bMKWGAXDi33CrcOLwq1Ywq8=', 'w7wkAV7DpMKBw7gYDcKfw6AGwo9IZ8KJw6JEwogVw7wMwoPDigovKcKeIF/DrcKFbEQ5w6zDt8ONTcKuAlkFGsKR', 'w5I7wr/Cmg==', 'DQ9nWA==', 'w6Rjw4PDvgY=', 'HAXCphXCgw==', 'w6RMfMOh', 'T082w7we', 'DcO+wpIPw6Y=', 'SU4Pw6g=', 'GsOaw54LIcO/', 'RUrDtMO3w7Y=', 'w6FFFsK/', 'D8OKwofDgBTDmg==', 'w5vCmsKhHMOJw4vDtcOEw6M=', 'w53Cv3QqKQ==', 'wp8Vw7wAw6VL', 'w4Znw4I=', 'ZsOZworDnMKE', 'LxXCsA==', 'wrPCq8OjZMKOPg==', 'SG/DvMO3', 'w5QuwqDCoMK+', 'w4ZxWE5u', 'Q37Cl3XDlypHwr8=', 'w44xwqLCicKrPw==', 'AsOBwprDkAXDgA==', 'IATDpRwv', 'VRrDuQ==', '5b6U5aeJ5oiM5aeb', 'QXzCkXjDrSpAwrLCisO5w6I=', 'DMODwoXCosOSYsKpwrfDjQ==', 'YxhTwqXDvAJXwosJ', 'wo90JsOCJndvwpQ=', 'A8OKw5kI', 'woLDqUzDng==', 'W2fDu8Okw60Rfy3CmcKHw4svw6fDg1IAUcOWwpLCoztBAkAewo86w5bDojE=', 'wo4cw7EKw5U=', 'w4B0ZsOhIA==', 'cR5Ewr7Drx9zwpsuU8KK', 'HWsfPMOdw5Rvw6FDcTY=', 'HsOlwqtAwo4=', 'w4zDpcOpRFY=', 'w4E1wr7CisKTPirClg==', 'dsO6wqrCkFrDkQ==', 'w5NuwoV6HQ==', 'w4AqwrnCi8K9', 'YBJDwr7DrR9owow=', 'w6xKBsK7wrXCrcKA', 'Ai7DoCcqAxkp', 'wrfDgS7DvcO+Qg==', 'woTDq0rDvsOb', 'w7hGYcOyEkY=', '5bWL57qq562k5a2L5oqb5p+p6aOq55ij5Lm144Gc', 'w4AnwoXCrcK0', 'VRDDsDcSw7I=', 'w7Njw5zDqDDCkT3CgkM=', 'Sk4Ww6zCtsKuwpnCusK3', 'woh/On0=', 'GzJl', '5Zy45p2R5ZyA6aGP5biK5Lmb5om55YuS5Luh562j5qO/776D', 'Q8O/F8KxbVzDsB9gwp/DuQ==', 'YxVRwqXDvDVowoYC', 'w5fDocOuwp3Cjw==', 'DMOOwofCosOSVcKWwrrDhg==', 'USh3QhnDpg==', 'w6ViaFk=', 'wqVEwrNsJcKZIMOfwp/DgQ==', 'wrJQPF/Dsg==', 'wrRvGkrDu8Kbw4FeDcOVwrtKw4pQbsKLw6xBwohUw6lfwofDlVp7', 'ADxrXw==', 'WUAow6HCisK9', 'GjxrRTzCuFwGwovCmw==', 'wozCj8O/B8KHw5/CrsKXwrEUZMOzw5jDpMKBwoDCsyfCkMKgw4XDs1I2TMOBCy1rccKCwr3Dv8KBw7g=', 'IhHDgwoN', 'w59zw77DvzA=', 'ZVg/w6LCvA==', 'b0DDgcObw5s=', 'wpzDt8OuwrTDhA==', 'RHbCi3bDoStdw6TCoMO1wr42w7/DqcO2w6vCuHbCuTzCoQBBwrjCv8ObwrDCrA==', 'wobDiMOBwqTDiw==', 'QcOuDsO3a1TDowN/wpLCt8OLwpPCn1XCvMOIw6vDqMKhQ8KdE8OGw7IYaMO4w51aBsOq', 'Rhchwq8x', 'wo7DvsKyw5HDrw==', 'w5ZPw6TDpSs=', 'e8O8wrDCnljDkMKlf8OaIMO4', 'w7cZwqDCo8Kfwos=', 'wqNKC8K9wqbDnw==', 'w7pKbMO+KE/Chkw=', 'BnzCj2jDoxNdwqXDvsK7wrwyw7DDtcKJw6PCtCfDumDCugBFwrjCvsOPwqrCo8Kz', 'XBY3', 'BClwQhPCvEEJwoQ=', 'TMOdw4cG', 'wpnDp0I=', '5LqS5Lil6K644oKF5p2T5rSl5YuW5Lu95L2G5pet57+n77246K2D5Yaz5rO45YaS5Li05raU5YqB44Gr4oKc', 'AMOOwpvDgzPDkRBwwqM=', 'BcOXw5EeMMOUw5XCgF8=', 'wqTCvsO2cQ==', 'w5gGRMOdwqnCtQfCpMKX', 'wpTDrEHDucO9w6g=', 'w6RABsKNwqbClw==', 'w6bDk8OLbVHDlsKyWi/Dog==', 'd8O+wq3CmW/DmsKlb8OlIQ==', 'w6Btw6LDpQzCgg==', 'aDvDiiIp', 'w4nCrnUmDsKoRsO4woE=', 'X2sIKQ==', 'w6ZFDMKawr/Cg8KRwoBJwpQ=', '5byg5aeU5omY5Y+H5p6b57qL5aST5aad44OB', 'W2fDu8Okw60Rfy3CmcKHw4svw6fDg1IAUcOWwpLCoy9QF3oLwrgLw5bDpxcDwoU=', 'SsOgFcKdAQ==', 'ATfDmMKWwogrw7JYTw==', 'FhoxwrcwwoQBbA==', 'wrcTARo0', 'wqDDkDbDtQ==', 'w7jDl8OWd3nDm8KhQA==', 'wqVVwr9rI8KfHMOFwpjCmMK8', 'BX/CtFnCosKYSsOSw7o=', 'wq3DgsOLbS0=', 'w6wuwqrChMKc', 'wrJXbsOmDXrCklnDgsO1', 'wrcrIS0E', 'TXd5wqrCjMO3BsKPwqo=', 'wplrJ3g=', 'w6dLYMOlL0o=', 'Fhw8wqA5wqgLJWvCtsO8', 'XgdWwr3Dmg==', 'wpHCu1U5wrc=', 'w7VVwrBqKQ==', 'w5TCgXkFLQ==', 'w7vDkMOKbHs=', 'w7MJwr7Cjw==', 'w4FNw4PDmBk=', 'Hj3DnA==', 'wrPDkCvDoA==', 'dH8mw7A7', 'b8OeA8KtHA==', 'wo5+Mm3DhAc=', '5rWv6KeX5bmy6ZOrwrtuFA==', 'wr/Cvlgiwro=', 'Wk4Sw70=', 'e8OvZ8KA', 'CMOKwo3CpA==', 'wp/DoErDocO8', 'w4J6w4nDmBY=', 'UHbCtl/CqMKpcMODw7bDhCs=', 'GEklw7NC', 'wrPCusOhYsKeOVjCqMKo', 'RcObwojDlAvDpgZywqMS', 'w6YUwqrCucKZwpk=', 'wrTDusKxw63DpMO1w75I', 'wrTCpsOydQ==', 'VCbDmsKXwoYJw4NdVMOSw5Y=', 'TGvDocO3w74XcXE=', 'w7ERwqLCn8KX', 'Hi7DtAssGA==', 'wrXCmE0TwpYPcw==', 'XhTDszU1w7nDp33CuQ==', 'woTCj8OiFA==', '5Lmx5Luh6L+45Zqp5Lm15Lm95q6156i35pWU5o2t', 'S31kwro=', 'w7/ChkEgOQ==', 'DgTCsS/CqmPCh8KbTg==', 'w7hyYFlmcw4=', 'DMOJwojCpMOU', 'w7QVwrrDh8KRwoPDpinCiw4=', 'CcOAwoDDiQ==', 'RhvDnmY=', 'H8ObwoA0w7APwoFHOGV6wqxHRQ==', 'EnbCoUo=', 'WG/DuMOmw4QaeXDCnw==', 'W2/DocOi', 'w7xCfMOaEUDCu1vDiMK4w5nCk8Kgeg==', 'WcOwA8KcKix6FQ==', 'wqUrOTk=', 'wp3DuMO0woc=', 'RH7CkXA=', 'YhRXwr/DrQ==', 'eMOXCsKwVw==', 'w6/Dk8OWYg==', 'V2Ub', '5Zib56yC5q+w56GX44K6', 'wozCh8OlAQ==', 'C8OOwprDqBfDnC9wwqlfw4cSd8OB', 'azvDsE1P', 'ajI5wq0Y', 'XRTDqjE=', 'w50XUcOFwpTCiw==', 'HCDDvis=', 'w4rCvXk0FMKlT8Ol', 'wqPDvsKxw7g=', 'wqbDlCPDug==', 'fsO+wrDClg==', 'wrJjFUPDj8KGw4U=', 'UmQYLcOK', 'woHCksKCIzDilqHojbHlvqQ=', 'wqE3w6dY', 'w61VwrF6', 'YMOhaQ==', 'w6ZGwq5wPsKgLMODwoLCncOmEg==', 'w4V4IA==', 'FcO6wpbCusOH', 'GMOOwpA=', 'ZMO6esKEwoPDjhPDnw3CuknCuW9twp1bw6vCi8OawrQ3wqbCiDfCmh/Cg3TDhSHCh0YMwrE3cBLDui0YTsOhG8KQwrjCo8KJ', 'BWPCp0LCqcK8TMOQw6Y=', 'UsO9EcKrfg==', 'w7hnw5/DqhfCmg==', 'wrFzAEXDrsKBw7sZD8OPwr9nw4JRJA==', 'ThXDjUJTbg==', 'XXhnwrbCoQ==', 'w7zDisOjYGTDnMKpXRrDqAnDiRQEW8Onw4gmT8KUdybChxzClcKh', 'w7VNDMOj', 'w79vM8OmFw==', 'w7ZBAcKswqjClsK2wqtO', 'B8OVwoAP', 'w7p6bEdS', 'w4p3N8KLwoA=', 'H8OXwqhoZw==', 'fBJX', '55Wa5om244KD', 'VBgkwqQ=', '44Cv5L+Y5oCj6Iyq5Y6p5oiO5Yuh', 'w5vCvH0xFMKv', 'FsODwrRWa8KdPBDDq8KDI3s0woE=', 'w4w9wq/ChcKRNjTChw==', 'w4w9wq/ChcK+Ojw=', 'D8OAwo4=', 'wrxpE2jDs8KB', 'WsO2esKiwqU=', 'WGdkwrrChsOoKsKZwrgNwoPCnnzCsGwuw5Eu', 'DR/CsDI=', 'wqEEwqHCgcKXwoLCtA==', 'wqRpH0jDrw==', 'wrZxc1JuVQQSNFZyw4Zs', 'wqvDsMKi', 'w53Cu2oqM8KsQMOswp0=', 'wq3CnF4EwpY=', 'ADfDiMKRwoEr', 'ASTDsDw7HiYuKA==', 'wo5vMGvDlAAgfjk=', 'w4YlwprCosKtwq/DlhfCsS5Ew5A=', 'DhXCoDTCoXDCvsKUWQ==', 'wqjDniXDkcOvVQ==', 'XUAIw70=', 'GQrDrCXCq2nCg8KSWRnCnXIzw57CssKawrtPwq5ZwpsCw7VqwqtAwo8+', 'w7Vhw4XDpBXCmybCiW/CrEM=', 'w6lLBQ==', 'ScOlA8KRCCJgB8KS', 'BnbCp1jCog==', 'wrMvPi0Nw60=', 'AMOaw54IMMOlw7PCgA==', 'bcO/w7U1w7w=', 'RVsPw7nClsO3w5nDp8KzwoNKVMKLwpERw7AsOsKRw488w7J/wqhlw49NSiYTBBfCpcK9w75uwr84GlQQw4DCvBdQUsKhNcOrYMOTw6sVwqI=', 'HsObwpTCvMOeQsKnwqfDgcOJwo7CnsKWHV4wwqAuwrfDm8OdMsOTZsK3w6MQwq3CuMKPw4/Cr30=', 'wrdOZ3DDoRwfeTLCrMKlw4rCqsKHVcKHbXVUNcKkwpM9CmLClCnCrU0xw6pVwrxbGn7DpcOCw7A7QMOFwoJ+UsOiUw==', 'wqfClQE/wpITc2BnTcOYw5YswrA=', 'GgrCqjbDqCTCisKYUVrCm2MiwqHDu8KVwrk=', 'azPDvx4X', 'wqQmw7oXw5XCsgnDn8KjBAjDgA==', 'wqXDqyrDnMOk', 'wq8LSA==', 'exhVwqfCtBdrwosRUg==', 'WUtnwrbCng==', 'akJawqPCoA==', 'QBXDjn4cOcOLw73CtXTConnDt8K+BMKIHAcww6RzVH9rwrbDkA/ChMKrw7rClMO/w4FFwotcwqYGw77ChMKDwoXDg8Kqwr0wJsK9w4nCrkTDhcOCLMOhYsKSw4zCicO2XEYfw59sU07DlWAHw7pQwqJCw5cERMKFGV0vV2sUfMKEDhbDswLDhsKzwqfDkivDuQ8WHcOYwpzDqAIDwrHCgMOZw4dqWcOlb8KiwpDCrjrCjEkbBsKDwqTCu8OgccOQOsOgQ0bDmSXCtcKwLUMAwr4bw5sCR8O3TybDqTkfwofCpFZ/w6bCtMKSZ2TDq8ORw7ElfCQ5BhzDpsOywo8lG8KUw5nCmFVeQcKMwo9BwoN9UV7Cs8KaMsKVwojDozDCs0g0wo5zbBRZw7/Dg8KwwqPDp8O9YGHCs8KcG1TCpcOvwpvDkcKKRFDCusObCj/CicKEw4zDvhpXKhTCt8KSF8K1wq8YQsKvFmTCl8KkfsK6wpkxw5dow7vCmsKKBcOjDjY1wpLDrVhRwofChSXCtRUew4PDvCvCh8Kxw7JdwrzChcKsMMO3wopywp/CkRFwM8K+wpzDl8OZw7HDtcOdw77Dl05hwrYbwqnDr040w69jw53DicOGDMOxw6s/NsK3w6FEFw4NMcO2BsKFG8Oofi8rw4hVwo8TRBxbwqfCnQ/DkEFRw7lqOFjCisKMZ8O+w5LDnlM/QsKnP8OQNQ/Dtg0DTX1rw4vCnx4xw4ZBEwjCq8KeLyY4woF9blZJcS8+OcObCsKHZULDv0TCgRxow55Bw6DDu8K/w6ZfYGXDp8OMw5DDgcOfJsKyw7zDv8Opw6ANRj3CnW8kAcOnw7gYw79TSMKDw6UDFjrCiFgRe8KYBHPDnztpBsOlR8KJa3cYworCm8KcPQzDg2TDtQoMw6RcRcOhFWrDusO+O8KEHydlw4DDqUhfwr1OQwTCn1duLsOXAW0BbMOjw7rCoW/ChsOOwqUNwppmciNuDzM6UMO5w7HCnEdMw7bDl8KXAsKpwr5/wp1KFsOnBEvDnMOwwognOlEXw6N1MMOUw48BwqLDpGDCknfCm8KBw4NMQHnDqBo0w5FNwozCl1pzwqvCtHAJJVvDjjvCqsKaVX8YNcKTw5bDoB3DunLDgj9HwoZke8ODw7LDksO1w78CbcKRUMORwqbClgZ0J0fDmcKRB8ONw5LDt8KIJj0swo3CvsKBGcKQT8OWEsOhPMKWOl0LBWwHOcOmwqVPw6MSw4nDs8OCBj7Cgk0+w7vDk8KPw5k2fcKMw6LDqcOfZ8O2w7PCm8OGZ2HCj8KwwoBQw71UCQfDtGvDrBcmAQbCr8ORw5ZrSsOXWz7DujR6KmdwG8KjwphsTMO1w5nCmVLCj03ClMOucCAIwr0pw7rDqwokwqnDh8OZCRoYw5rDrcOfJsOKHMKfIMKMPTAOR8OzeDjCnMKrI8KLwpLCgVrDull8w7vCgkDDgX3DgBoTw53DpHPDqivDvsKawpA/ezY5wrcfIMOeeMO0wojDosOCDsKJwoLDs8KIfMKIwqzCqsKkTQQLWwDClC/ClX7DqHpTw7M9S8K7w7hJw7/ClMKEOcKUwoddw7bCocOvd14Aw4bDi8Kswpozw7rDrsOIOV1FdmfDjgHDmGPCl8O3w7AWwrZawqHDtcOjw4jDlwo5w60XwrDCh8OYZBlHw5nCmMO+woYQwrTChMOELsOUw48zIAVZdsKEw7sMNlrCo8Kewr8BMMOgOXQBw5bCjsKLwqrDhCLDn8OKVSw+woZIw7AfelDChBlPQcKVWsOIfGfClcKiw497NcOwY37DjMKbdsK0wqo=', 'wrElPiw=', 'UlYr', 'woLDpcO1wprDnMOOCHbDjA==', 'asO+wrbChEs=', 'wrPDsMKuw7zDo8OQw7xC', 'w7FLCcK7wqPCqcKDwrs=', 'wqRpH0jDr8K4w40I', 'C8Obwp3DlxPCiFAtwqdfw4tObsKWw4RCC2LDhMOGwp5Cwr7Dg8KMHzhdNsK3wpIbOcKAUFfCusK2NsKPw6HDtcOmAAFDwpwWNFsdwqVxwp0ew5UCcsKy', 'Fi1rBRDDtUILw5PCnUB/', 'wrsiYBAAw7fCpzY8woUTCsOawrk=', 'HH7Cv2LCrA==', 'bGNvwp/CgQ==', 'EMK+Ww==', 'HDhnW1DCukQGwovCmw==', 'cVYjwqfCucOtIMKFw7JFw5fDnAbDvA9/wp9hw6TDjMKjw6thw4fDr2FwwqAhIQ/Cg09nO8Khw5FgwonCryrCqwIba8KJQQ==', 'wqhvK3HDow==', 'wrrCjn4RwpU=', 'XMObw5AUwqrDucKCw47Du1zClXrCsHHCtQwjw4nCrUAXcQ/DisO/w7DCv2XDsnMGwp/CkcKHw4IEA0bDnmM2NiwPwq/CncO6Fhp2Dw/DkkhqJnM4aSBmwpzDqFTDicKtYybCgx1RwrzDicOpw4PDocK8wqolFipTKU47w73DoMKgwrzDs8KAV8OvP8KdWcOJwqXCp8Kuw7PDosOKNgHCn3IyeMK6w6dqURYWw6d/wqsnNTLClMKswq80csKbXsKnHTEBwpAVYQ50SC/DsMKEw5DDjMKXFxUvLHohaMOXAX7Cmmx+AMOZw7h4TMK7Yk7CoWs7ADR2DsOow6XDvH52wpnCtMO6NljCnlEyd1/CncKmw5wRwrHDncK1GsOlGsOtYi3DlF1rwqnCmMKhDMK5w6PCmcKWwr7CtxLCosKVBsKiS8OsCWDDsQbDksKKPMOYMFkRbxXDogPDuFprP2/DksKOw44Fwq9mR0zCvA==', 'UHDClmU=', 'GnjCsg==', 'EMObwpvDjg7DlRZkwr8=', 'UH7Cl2LDvg==', 'wrdwCV3Dmw==', 'ecOwwqDCkg==', 'A8OVwpgew6k=', 'Hi7DtA==', 'fR0ZwqEH', 'UsO0EMKcAzd6', 'PMOTwq42QcKWGhbDo8KB', 'HHPCtFvCt8OgTMOmw7fDj3jCs8Kgw7FeGsKcwpfDjiMSW8OqHh7CtcK9RcORLVhGw4kvJ8ODwrwLQ8KDwq0lwpzCqcKxw7IQOysFH8KRVMK8wpApGFPChj7DncOewotow7Myw5Udw7jChcKQwqTDp8Kkw5rCoT7DhmnDtsOzw6hgZBHCocKqHcOCw6jCrEbClcK5ZBUwJcOfwrdUAyPDk2cFLh3Ciw7DqT4ZwqrDrMKZIg7CjQLDv8OJwrsGQy5Bw7dkwrnDnl0nw5/DlcOqRBFGPsOnw6d/cMO8KHzDijjCv8K7EDTCj8KGw6QcwozCiRB2Z8KVwqlrwoh7w7rDocOcwofDmsOBw5VbwrRfwqnCtB/DrjXDi8K0w6kbwqbCmsOCWixdEmnClmZFw57Dn0vCh8OAw6UhwoTCgMOWVyDCnDXDoVMYJMKgFRnDpFLCp8KIwpzCjRM5w7nDt3wAw6UgwoYAZcO5w7PDjxl+BHZ+EsKtHsOww5IQYivCsCjCgcKkIcKPw68jwrURZMKJw5xvwo8kBizCjWEVwpAXwrdWw5vDpcKpc8KzSsO4w6d2B8Oaw6zDsibCosKfw63CrMKEf8O6w4bDknNewo9Ifg7DhDnDscKSw5xiXE8pw7nDiQjDlcO9wp7ClMK0w4LCo8KTfXUYw5HCicKiw4TDtW/Cp8KTw4HCnMKVGSrCm8OqQcO/CMOFwpLConHCjCfDtXfCjAVPw5YQwqJiL8OdCsOxI3LDrGXCn0bCuMOdVcOeScO7IcKJwrZbw7fDtGN+FcKIwr1YaDTDucO7w7p1esKcJwvDpcKhRzzDsFTDh1vDj0hEwq5Vw5MAMcOVRXnCmQ==', 'w5TCpzULPMKlWsKnwqdsVcKIwq4S', 'wq0iw6dJw4vCpkzClMOhHQPDl8OMHMOkw4PCjcOcf8KCUXLDv8K7wrNUN8O/wrt1wpoMEXPDhcKDw6vDszo6w6DChXBMw5xlSmJlw4dbNcKmXMKowpzDnhHDn1jDpAXDojRiwp0kKsO3wr7CkQ==', 'AnLCrV/DqMKrScOXw7bDjg==', 'CRXCuzLDq2zCmsKQWxrCm2c3w6HCssKUwqpXwqJ3wpZZw4RswrlCwrV6EEPCs8KITHEuNsKTw5rDosK8wpxUwq/Cl8KZwoV3w4rDjynCr8KDVsOpcBNkQTfCo8O/bkE=', 'BMOww7gcHw==', 'wqzDscKAw4vDrw==', 'wo/Cg8Ol', 'SgHDrDkIw73DoWnCpQ==', 'UT7DqHdQ', 'QcOHwpbDscKS', 'ScOhHcKREg==', 'ECbDlDYU', 'w4LCtXw5cMKiWsO8w4pLHcKPw7lAw6Y3WhI7ISEm', 'YMOYwo5mw4c7GcKKwrUPwpxXJsOH', 'w4hnN8OcK11qw53Cul4fw7RgS8KRwo/CmFPCs8KAwq0fHR/DkWc/w6bDjsOkEHDCug==', 'UXZ2wr7CmcK+JsK7w78FwojCjwrDsBJ0wpFxwrbCrcO/wqo8wpnCuiRtwpgdc1XCmBY9ZsOowrlCwqzCigvCqwpGLsOJGMK1wprDh1PDk8OwU0bDusK0MxPCmsOGcMKABMK+w7bDjsKsdMKOdsORCMOIFDXCuF5dwr/Cq8OsNV7DkcOnw6zCjCXDrMO4wpQlD8K5w51XX8OCwo44w6JkNX0YwpTCrCFZw5k9b8OXOGQZw5NJNn8Gw6ZvKsO1w77Cq0PCulEnY8KnacOywovDrcKEworDgMORPcO0wo0wJ1QvwoXCuRLCoFLDq3/CosOPwp55woYSLH3DusKyw7TClWjDisKmZD7DiXnCu8KXH0fCqzMCRRLCuQ/DplvCkSXDlsKZwrJVw6XDvMKEw6gDc8Kpw4DDql5OK8OkwpzChsK8IcOpwqg2URbCvDQCa8OTJcOVZ2LDol1nw6TCs8KebMKUGFNpFMOFw47Ct0zCrcKjwoMVJsOHw4fDkTXCth3DvsOOwrbCisODw5VKaBvDgnTCuMO7woEBLcKpw7o8OVrDgcOgEFZRGHVBTcOZKTwIw4vCl8KGFHfCrwbDt8KNTQnCp1B5QsO1wqrCtyfDmsOIA0XCu8OLwqvCtEs7YMOPw6TCl0/DjxbCksOKwq/DnSnCucOcQh3CkXEawqfCn2DDqWfCumsvwqUIw4jCnQZcAiJHworDtjZkwpHCq8ODc8OtfSfCrl1ww7EjwqLDs8O/w7LCgB/DilbCh356QDdYIyPDiw0aQcK4w4DDgsOAw5lcK3JkUj3CjjrDmcOuw6MJwox6w5TDkk7DnFnDrcKKwrF1B8OTw64J', 'H8OOwocLw7Rbw74aO297wqQeVcKGw7lcwrbDmMKDGQInbsKBBCnDlzHCssKN', 'wq3Dq8KJw4PDmA==', 'OcOjwqlCUA==', 'w6ZcwrhtAg==', 'YTd0wqHDiw==', 'wrzCi0cdwok=', 'w61QFsKuwr7DmMOJw61Mwok+woxURArDjBzDi8KlUDBdw5MRw5/DocO8wqLDvj8=', 'FhXCpjbDqWXCgsKUQVM=', 'IMOMwo5CSg==', 'dhHDsxsC', 'dsOyEMKfbA==', 'UMOhwrZew4B1RsO3wrEOwoAcJ8KBwrrCjcOMw7PCkcOhwpfDpMORw4XCqWkfFMOjL8OOWx/DjX/CuMOswr1Vw7zDpsKrNcOn', 'UsObw5M=', 'DRHCsTXCoQ==', 'wo7CtF47wpQ=', 'wpFvPX7DhRw=', 'wrAlw7ZLw6vDtALDicOoJAjDicKE', 'w4oNUcOAwr7CvxHCosKXOw==', 'TcOmwqdcw6AnCMKqwrU9woZWMA==', 'G8OVwpQ+w7UT', 'wprDgWbDp8Of', 'WA0kwrUnw7dKfkPCosKoTRbCusOUByQ3dRYUWS5wBMORJMOIZMOdw68Aw7AJMMKgwocMXU8ke8Kjw54s', 'S8OJWsK2wpY=', 'w5l4NMOE', 'wrRiX8Oc6K6R5rGs5aea6LSM776r6Ky/5qG85pyE576F6Les6YSr6K6s', 'Tlg+w64a', 'w7htw5Y=', 'w6bDgcOF', 'wpFlNFzDgwY=', 'FsO6wphQTg==', 'w7Zjw4LDqA==', 'VVwpw61SfxLCmlBo', 'OBbDrsKl', 'w5MBUcOCwqvDmxvCncKbMcOiGCQyf3zDmMOdPsKsw4YRwprDk3HDssKjGGl5ScOkEXppw6FdH8KJFsOWBRIzWQvChGJqwpHCiiRwHsOpw67ChMKfYMOTwqJEBn/CkMOmJ3/Ck1XDnz3Cr8OKw4QGCQ==', 'wrjDm1DDosOv', 'acOiwqZjw4Y=', 'SsOoF8KoaA/Cq0leworDqsOIwoPCnl/CvcOWwqHDr8KmZcKdUcO/w70ZYsKBw6VcCsOsa8KAwqXDvMKyMXDCjG0eNiF4BsOzw5/Cp8OGREvCqkg=', 'wqA6PTQIw7rCtW8WwqRGVMKfwqVwwrHCi8KPGsKkCsOyCTgKI8KTbcOmw7oxCXQ=', 'wqfCpcOrYMOXbWzCpMKgAcObw4pfwpnCjcKWwow=', 'FhDDtiEY', 'HsOLw4QcJsKtwpXDi03DtMK1w4diwqsFwqHDknrCvTbCgHUSPcOXX8Kpwr3Ct8OAw44jw6Vbw7dyw5vCkSwRVcOVw7rDqghtw5vCqGM=', 'VRcm', 'w5wLRg==', 'wo8Sw4xsw6vDmTHDpMOMICLDo8K1', 'HcOewpILw7dawrhlP3pxwrsIBcObwr1cw63CkMOER095OsORJTPCkRzCnsKHwoXCt2Jmw4TCsVDDgyrDjB3Cohxsw44GCm3CosOqYMKbLGk7UQHCksK+wp3CsTXDqjAqaiXCvMKhwoXDpQHDvsK8Tik=', 'XHdjwqrCiMOxLg==', 'wpkTw7wXw417VA==', 'wqYbw55Ww50=', 'QsOYwonDrA==', 'V31w', 'wpNrPnw=', 'w4kEQsOBwr4=', 'SRLDnT4E', 'Mw1LbjM=', 'w6kZwq3CgcKcwo3DpCc=', 'ThXDjQ==', '5Li85LiL5pyM5Yqc5Zmr6L+V5Zqj56iY5pSh5oyF', 'TsOzBMKdaUc=', 'Aw1YRxU=', '44Cw5o+P56ef44CA6K2s5YSL6I6D5Yyd5Lmv5LqB6Le55Y6v5LqYw6/CtsOlwrFzwrkZ55im5o+E5L2I55e1wqXDlcKhwr7DisKU55qJ5Lu85Lm356+h5Yis6I2f5Y68', 'w61QFsKuwr7DmMOJw61CwpY7wphXQFfDkFbCjMK1STcRw50bw4vDq8O9wrLDuDXDvWjDu8Kiw7vDslBuSsOtEDct', 'RxTDnmJTaMKdw5bDvivDtWPDrA==', 'wp/DsMOqwpY=', 'wrDDiSrDjsOZ', 'W8OxwpbCp0A=', 'wp3DvFHDmsOlwqfCsUBnfcOcwrtKdcKRwpzDmT52wp3DoMKHGixDw5vCgMO6w7XCh3TDrAHCtj5GLMKcFMKPMsKSwpI=', 'EQ1bSgU=', 'wpnDrUvDjcOiw7U=', 'wonDpcOmwrfDnA==', 'aMO+AcKQWA==', 'jZKsjJXiagmiXk.CKcoEkmM.v6=='];
(function (_0x29537c, _0x27c360, _0x14ab51) {
    var _0x54d0a0 = function (_0x2f860e, _0x51cfa1, _0x52e54c, _0x509abc, _0x29a9cd) {
        _0x51cfa1 = _0x51cfa1 >> 0x8, _0x29a9cd = 'po';
        var _0x67a940 = 'shift', _0x4b225b = 'push';
        if (_0x51cfa1 < _0x2f860e) {
            while (--_0x2f860e) {
                _0x509abc = _0x29537c[_0x67a940]();
                if (_0x51cfa1 === _0x2f860e) {
                    _0x51cfa1 = _0x509abc;
                    _0x52e54c = _0x29537c[_0x29a9cd + 'p']();
                } else if (_0x51cfa1 && _0x52e54c['replace'](/[ZKJXgXkCKEkM=]/g, '') === _0x51cfa1) {
                    _0x29537c[_0x4b225b](_0x509abc);
                }
            }
            _0x29537c[_0x4b225b](_0x29537c[_0x67a940]());
        }
        return 0x776f4;
    };
    return _0x54d0a0(++_0x27c360, _0x14ab51) >> _0x27c360 ^ _0x14ab51;
}(_0x443e, 0x1c9, 0x1c900));
var _0x3b33 = function (_0x2d0615, _0x5f060b) {
    _0x2d0615 = ~~'0x'['concat'](_0x2d0615);
    var _0x2c450a = _0x443e[_0x2d0615];
    if (_0x3b33['ZrzNZq'] === undefined) {
        (function () {
            var _0xc9cf12 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x3b3e7a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0xc9cf12['atob'] || (_0xc9cf12['atob'] = function (_0x4964c6) {
                var _0x5306ae = String(_0x4964c6)['replace'](/=+$/, '');
                for (var _0x15aeba = 0x0, _0x2035ab, _0x2ccf0c, _0x510b18 = 0x0, _0x568f3e = ''; _0x2ccf0c = _0x5306ae['charAt'](_0x510b18++); ~_0x2ccf0c && (_0x2035ab = _0x15aeba % 0x4 ? _0x2035ab * 0x40 + _0x2ccf0c : _0x2ccf0c, _0x15aeba++ % 0x4) ? _0x568f3e += String['fromCharCode'](0xff & _0x2035ab >> (-0x2 * _0x15aeba & 0x6)) : 0x0) {
                    _0x2ccf0c = _0x3b3e7a['indexOf'](_0x2ccf0c);
                }
                return _0x568f3e;
            });
        }());
        var _0x4c064a = function (_0xf28d55, _0x5f060b) {
            var _0xa00be5 = [], _0x38a356 = 0x0, _0x3391b8, _0x37d5f2 = '', _0x452174 = '';
            _0xf28d55 = atob(_0xf28d55);
            for (var _0x99d821 = 0x0, _0x4c9dc3 = _0xf28d55['length']; _0x99d821 < _0x4c9dc3; _0x99d821++) {
                _0x452174 += '%' + ('00' + _0xf28d55['charCodeAt'](_0x99d821)['toString'](0x10))['slice'](-0x2);
            }
            _0xf28d55 = decodeURIComponent(_0x452174);
            for (var _0xe44162 = 0x0; _0xe44162 < 0x100; _0xe44162++) {
                _0xa00be5[_0xe44162] = _0xe44162;
            }
            for (_0xe44162 = 0x0; _0xe44162 < 0x100; _0xe44162++) {
                _0x38a356 = (_0x38a356 + _0xa00be5[_0xe44162] + _0x5f060b['charCodeAt'](_0xe44162 % _0x5f060b['length'])) % 0x100;
                _0x3391b8 = _0xa00be5[_0xe44162];
                _0xa00be5[_0xe44162] = _0xa00be5[_0x38a356];
                _0xa00be5[_0x38a356] = _0x3391b8;
            }
            _0xe44162 = 0x0;
            _0x38a356 = 0x0;
            for (var _0x440439 = 0x0; _0x440439 < _0xf28d55['length']; _0x440439++) {
                _0xe44162 = (_0xe44162 + 0x1) % 0x100;
                _0x38a356 = (_0x38a356 + _0xa00be5[_0xe44162]) % 0x100;
                _0x3391b8 = _0xa00be5[_0xe44162];
                _0xa00be5[_0xe44162] = _0xa00be5[_0x38a356];
                _0xa00be5[_0x38a356] = _0x3391b8;
                _0x37d5f2 += String['fromCharCode'](_0xf28d55['charCodeAt'](_0x440439) ^ _0xa00be5[(_0xa00be5[_0xe44162] + _0xa00be5[_0x38a356]) % 0x100]);
            }
            return _0x37d5f2;
        };
        _0x3b33['ZTiIib'] = _0x4c064a;
        _0x3b33['UfrPoe'] = {};
        _0x3b33['ZrzNZq'] = !![];
    }
    var _0x529b38 = _0x3b33['UfrPoe'][_0x2d0615];
    if (_0x529b38 === undefined) {
        if (_0x3b33['vjjhhR'] === undefined) {
            _0x3b33['vjjhhR'] = !![];
        }
        _0x2c450a = _0x3b33['ZTiIib'](_0x2c450a, _0x5f060b);
        _0x3b33['UfrPoe'][_0x2d0615] = _0x2c450a;
    } else {
        _0x2c450a = _0x529b38;
    }
    return _0x2c450a;
};
!(async () => {
    var _0x1146d2 = {
        'txhZD': _0x3b33('0', 'FVHO'),
        'AnRPn': _0x3b33('1', 'z24E'),
        'fPYax': function (_0x561b68, _0x278020) {
            return _0x561b68 < _0x278020;
        },
        'JbbHC': function (_0xae6adc, _0x1afe8c) {
            return _0xae6adc(_0x1afe8c);
        },
        'xtaDn': _0x3b33('2', '@jhR'),
        'zzqlh': function (_0x51d171) {
            return _0x51d171();
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($[_0x3b33('3', '%Hk@')], _0x1146d2[_0x3b33('4', 'P2OR')], _0x1146d2[_0x3b33('5', 'zewy')], {'open-url': _0x3b33('6', '$d%u')});
        return;
    }
    for (let _0x54109d = 0x0; _0x1146d2[_0x3b33('7', 'HkA1')](_0x54109d, cookiesArr[_0x3b33('8', '$d%u')]); _0x54109d++) {
        if (cookiesArr[_0x54109d]) {
            await _0x1146d2['JbbHC'](getAuthorCode, _0x1146d2[_0x3b33('9', '%Hk@')]);
            await getShareCode();
            cookie = cookiesArr[_0x54109d];
            originCookie = cookiesArr[_0x54109d];
            $['UserName'] = _0x1146d2[_0x3b33('a', 'GxlJ')](decodeURIComponent, cookie[_0x3b33('b', 'HCvz')](/pt_pin=(.+?);/) && cookie[_0x3b33('c', '@pos')](/pt_pin=(.+?);/)[0x1]);
            $[_0x3b33('d', 'k@d*')] = _0x54109d + 0x1;
            $['isLogin'] = !![];
            $[_0x3b33('e', 'k@d*')] = '';
            await _0x1146d2['zzqlh'](TotalBean);
            console[_0x3b33('f', 'CBnk')]('\x0a******开始【京东账号' + $[_0x3b33('10', 'Z3lq')] + '】' + ($[_0x3b33('11', 'R*y*')] || $[_0x3b33('12', '0IOX')]) + _0x3b33('13', '$d%u'));
            if (!$[_0x3b33('14', '84]S')]) {
                $[_0x3b33('15', '$d%u')]($[_0x3b33('16', 'GxlJ')], '【提示】cookie已失效', _0x3b33('17', ')CMQ') + $[_0x3b33('18', 'z24E')] + '\x20' + ($[_0x3b33('19', 'U37e')] || $[_0x3b33('1a', 'XEeE')]) + _0x3b33('1b', 'P4Cr'), {'open-url': _0x1146d2[_0x3b33('1c', '(J&H')]});
                if ($[_0x3b33('1d', '*zxU')]()) {
                    await notify[_0x3b33('1e', ')CMQ')]($[_0x3b33('16', 'GxlJ')] + _0x3b33('1f', 'tfWT') + $[_0x3b33('20', 'V]&W')], _0x3b33('21', '*zxU') + $['index'] + '\x20' + $['UserName'] + _0x3b33('22', 'V]&W'));
                }
                continue;
            }
            await _0x1146d2['zzqlh'](entertainment);
        }
    }
    if (message !== '') {
        if ($[_0x3b33('23', 'e^f0')]()) {
            await notify[_0x3b33('24', 'H1&A')]($['name'] + _0x3b33('25', 'cow&'), message);
        } else {
            await $['msg']($['name'] + _0x3b33('26', '3Dhq'), _0x3b33('27', '2qnz'), message);
        }
    }
})()[_0x3b33('28', 'Oh1f')](_0x17c121 => {
    $[_0x3b33('29', '@pos')]('', '❌\x20' + $[_0x3b33('2a', '*zxU')] + ',\x20失败!\x20原因:\x20' + _0x17c121 + '!', '');
})[_0x3b33('2b', 'k@d*')](() => {
    $[_0x3b33('2c', 'e^f0')]();
});

async function entertainment() {
    var _0xf46ca0 = {
        'aAfBx': 'https://api.r2ray.com/jd.bargain/index',
        'gTVPt': _0x3b33('2d', ')CMQ'),
        'rqXdz': 'application/x-www-form-urlencoded',
        'kEWzs': 'https://h5.m.jd.com',
        'ErzAO': 'gzip,\x20deflate,\x20br',
        'RyGVc': 'keep-alive',
        'jgLsH': _0x3b33('2e', 'zKs$'),
        'mvsJP': _0x3b33('2f', 'R*y*'),
        'mllUd': function (_0x4135e2) {
            return _0x4135e2();
        },
        'aueSG': _0x3b33('30', 'yXQW'),
        'VsvDe': _0x3b33('31', 'g48g'),
        'xpzvu': function (_0x30652a) {
            return _0x30652a();
        },
        'qvzaa': function (_0x1a37b3) {
            return _0x1a37b3();
        },
        'jfMLn': function (_0x360480, _0x79ffa3, _0x3adcf7) {
            return _0x360480(_0x79ffa3, _0x3adcf7);
        },
        'vzlNa': function (_0x2c87a6, _0x4933be, _0x12ab9f) {
            return _0x2c87a6(_0x4933be, _0x12ab9f);
        },
        'RnQUY': 'dingzhi/taskact/common/drawContent',
        'Jnxaa': function (_0x5b2c8a, _0xcf41e) {
            return _0x5b2c8a(_0xcf41e);
        },
        'LEWWP': function (_0x468855, _0x3160db) {
            return _0x468855(_0x3160db);
        },
        'cdXMT': function (_0x1a1847, _0x231272) {
            return _0x1a1847 > _0x231272;
        },
        'braQb': function (_0x713873, _0x37e14c) {
            return _0x713873 !== _0x37e14c;
        },
        'TnpDb': function (_0x2950d5, _0x33dc2e) {
            return _0x2950d5 === _0x33dc2e;
        }
    };
    $[_0x3b33('32', 'Z3lq')] = ![];
    $['gameScore'] = 0x0;
    $[_0x3b33('33', ')CMQ')] = 0x0;
    await _0xf46ca0[_0x3b33('34', '@jhR')](grantToken);
    await $[_0x3b33('35', 'Oh1f')](0x5dc);
    await getActCookie();
    await $['wait'](0x5dc);
    await _0xf46ca0[_0x3b33('36', '$d%u')](getActInfo);
    await $[_0x3b33('37', 'V]&W')](0x5dc);
    await getMyPing();
    await $['wait'](0x5dc);
    await _0xf46ca0[_0x3b33('38', 'g48g')](getUserInfo);
    await $[_0x3b33('39', 'W!ev')](0x5dc);
    await _0xf46ca0[_0x3b33('3a', 'P4Cr')](getActContent, ![], $[_0x3b33('3b', 'Jf2A')]);
    await _0xf46ca0[_0x3b33('3c', 'YXiN')](doTask, _0xf46ca0['RnQUY'], 'activityId=' + ACT_ID + _0x3b33('3d', 'tfWT') + _0xf46ca0[_0x3b33('3e', 'W!ev')](encodeURIComponent, $[_0x3b33('3f', '%Hk@')]));
    if (!$['risk']) {
        await $[_0x3b33('40', 'YXiN')](0x5dc);
        await getActContent($['doJob']);
        await $[_0x3b33('41', 'cow&')](0x5dc);
        await _0xf46ca0[_0x3b33('42', ')9[U')](answer);
        await $[_0x3b33('43', 'GxlJ')](0x5dc);
        await _0xf46ca0[_0x3b33('44', 'zKs$')](getActContent, ![]);
        await _0xf46ca0['qvzaa'](draw);
        console[_0x3b33('45', 'GxlJ')]('好友助力码【\x20' + $[_0x3b33('46', 'HCvz')] + '\x20】');
        await submitShareCode({'share_code': $[_0x3b33('47', 'Oh1f')], 'pt_key': $[_0x3b33('48', 'W!ev')]});
    } else {
        if ($['isNode']()) {
            await notify[_0x3b33('49', 'k@d*')]($[_0x3b33('4a', 'U37e')] + _0x3b33('4b', 'MHn%'), _0x3b33('4c', 'XEeE') + $[_0x3b33('4d', 'VAaD')] + '\x20' + ($['nickName'] || $[_0x3b33('4e', '@pos')]) + '\x0a京东说‘本活动与你无缘，请关注其他活动。’');
        } else {
            await $['msg']($[_0x3b33('4f', '(J&H')] + _0x3b33('26', '3Dhq'), _0x3b33('50', 'YXiN'));
        }
    }
    if (_0xf46ca0[_0x3b33('51', 'Oh1f')]($[_0x3b33('52', 'M^8!')], 0x0)) {
        message += _0x3b33('53', '84]S') + $[_0x3b33('54', 'P2OR')] + '\x20' + ($[_0x3b33('e', 'k@d*')] || $['UserName']) + '\x0a\x20\x20\x20\x20└获得' + $['bean'] + '京豆';
    }
    if (helpAuthor) {
        function _0xf2352b() {
            var _0x8793bd = {'mRPVD': _0xf46ca0[_0x3b33('55', 'XEeE')]};
            return new Promise(_0x55dc98 => {
                $['get']({'url': _0x8793bd[_0x3b33('56', 'YXiN')]}, (_0x469bd2, _0x4881bb, _0x13456d) => {
                    try {
                        if (_0x13456d) {
                            $['zData'] = JSON[_0x3b33('57', 'V]&W')](_0x13456d);
                        }
                        ;
                    } catch (_0x545c8a) {
                        console[_0x3b33('58', '3Dhq')](_0x545c8a);
                    } finally {
                        _0x55dc98();
                    }
                    ;
                });
            });
        }

        function _0x530028(_0x5b0c7b, _0xd1e9b4) {
            let _0x4972c2 = {
                'url': _0x3b33('59', '$d%u'),
                'headers': {
                    'Host': _0xf46ca0[_0x3b33('5a', 'Z3lq')],
                    'Content-Type': _0xf46ca0[_0x3b33('5b', 'R*y*')],
                    'Origin': _0xf46ca0[_0x3b33('5c', '84]S')],
                    'Accept-Encoding': _0xf46ca0[_0x3b33('5d', 'cow&')],
                    'Cookie': cookie,
                    'Connection': _0xf46ca0[_0x3b33('5e', 'YXiN')],
                    'Accept': _0x3b33('5f', 'CM8L'),
                    'User-Agent': _0xf46ca0['jgLsH'],
                    'Referer': _0x3b33('60', 'P4Cr') + _0x5b0c7b + _0x3b33('61', 'e^f0'),
                    'Accept-Language': _0xf46ca0['mvsJP']
                },
                'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + _0x5b0c7b + _0x3b33('62', '0IOX') + _0xd1e9b4 + _0x3b33('63', '3QQj')
            };
            return new Promise(_0x24d966 => {
                $[_0x3b33('64', 'aEHI')](_0x4972c2, (_0x48dde5, _0x460b39, _0x22f395) => {
                    if (_0x22f395) {
                        $[_0x3b33('65', 'HkA1')] = JSON[_0x3b33('66', ')CMQ')](_0x22f395);
                        _0x24d966();
                    }
                    ;
                });
            });
        }

        function _0x12d1f6(_0x5f1987, _0x8cb92e) {
            var _0xfc5f83 = {
                'SRATF': function (_0x4e252c) {
                    return _0xf46ca0['mllUd'](_0x4e252c);
                }
            };
            let _0x5f5977 = {
                'url': _0xf46ca0[_0x3b33('67', '3Dhq')],
                'headers': {'Content-Type': _0xf46ca0['VsvDe']},
                'body': JSON['stringify']({'actID': _0x5f1987, 'actsID': _0x8cb92e, 'done': 0x1})
            };
            return new Promise(_0x192fd0 => {
                $[_0x3b33('68', 'HCvz')](_0x5f5977, (_0x1af907, _0x21fae9, _0x507593) => {
                    _0xfc5f83['SRATF'](_0x192fd0);
                });
            });
        }

        await _0xf46ca0[_0x3b33('69', 'yXQW')](_0xf2352b);
        if (_0xf46ca0['braQb']($[_0x3b33('6a', 'PLOu')][_0x3b33('6b', 'P4Cr')][_0x3b33('6c', 'CBnk')], 0x0)) {
            for (let _0x31712d = 0x0; _0x31712d < $[_0x3b33('6d', '@pos')][_0x3b33('6e', 'z24E')][_0x3b33('6f', 'XEeE')]; _0x31712d++) {
                var _0x22f8cd = _0x3b33('70', 'M^8!')[_0x3b33('71', 'g48g')]('|'), _0x20e634 = 0x0;
                while (!![]) {
                    switch (_0x22f8cd[_0x20e634++]) {
                        case'0':
                            actsID = $['zData']['data'][_0x31712d][_0x3b33('72', 'Oh1f')];
                            continue;
                        case'1':
                            if ($[_0x3b33('73', ')CMQ')] && _0xf46ca0[_0x3b33('74', 'eWpX')]($[_0x3b33('75', '3Dhq')][_0x3b33('76', 'CM8L')], 0x4)) {
                                await _0x12d1f6(actID, actsID);
                            }
                            continue;
                        case'2':
                            await $[_0x3b33('77', '@pos')](0x5dc);
                            continue;
                        case'3':
                            actID = $['zData']['data'][_0x31712d]['actID'];
                            continue;
                        case'4':
                            await _0xf46ca0[_0x3b33('78', 'aEHI')](_0x530028, actID, actsID);
                            continue;
                    }
                    break;
                }
            }
            ;
        }
        ;
    }
    ;
}

async function draw() {
    var _0x360dd2 = {
        'VfYsm': function (_0x36e39f, _0x5cf6b4) {
            return _0x36e39f < _0x5cf6b4;
        }, 'REvRq': function (_0x1f21de, _0x324064) {
            return _0x1f21de === _0x324064;
        }, 'FrYVw': 'dingzhi/change/able/startDraw', 'GhNSw': function (_0xd7d171, _0x114041) {
            return _0xd7d171(_0x114041);
        }
    };
    for (let _0x553298 = 0x0; _0x360dd2[_0x3b33('79', '(J&H')](_0x553298, $[_0x3b33('7a', 'FVHO')][_0x3b33('7b', 'aEHI')]); _0x553298++) {
        const _0x2b14cc = $['cardList'][_0x553298];
        if (_0x360dd2['REvRq'](_0x2b14cc[_0x3b33('7c', 'XEeE')], !![]) && _0x360dd2[_0x3b33('7d', '2qnz')](_0x2b14cc['draw'], ![])) {
            console[_0x3b33('7e', 'e^f0')](_0x3b33('7f', ')CMQ'));
            await doTask(_0x360dd2['FrYVw'], _0x3b33('80', 'FVHO') + ACT_ID + '&actorUuid=' + $[_0x3b33('81', 'zKs$')] + '&pin=' + _0x360dd2['GhNSw'](encodeURIComponent, $[_0x3b33('82', '84]S')]) + _0x3b33('83', 'H1&A') + _0x2b14cc[_0x3b33('84', 'CBnk')]);
            await $[_0x3b33('85', '$d%u')](0x3e8);
        }
    }
}

async function answer() {
    var _0x1d88a6 = {
        'pjyyy': function (_0x54d835, _0x6f1206, _0x4f668f) {
            return _0x54d835(_0x6f1206, _0x4f668f);
        }, 'TWitF': _0x3b33('86', '@pos'), 'GWKGF': function (_0x12f19c, _0x29f075) {
            return _0x12f19c < _0x29f075;
        }, 'PZYeQ': function (_0x5701e1, _0x37797f) {
            return _0x5701e1 === _0x37797f;
        }, 'GZwaO': function (_0xafae3a, _0x4de729) {
            return _0xafae3a !== _0x4de729;
        }, 'qcoTM': function (_0xbccc9c, _0x1cf950) {
            return _0xbccc9c === _0x1cf950;
        }, 'BkaDE': function (_0x5b432c, _0x188740) {
            return _0x5b432c(_0x188740);
        }, 'OZoFC': function (_0x50e76a, _0x75e6f1, _0x44a09c) {
            return _0x50e76a(_0x75e6f1, _0x44a09c);
        }
    };
    await _0x1d88a6[_0x3b33('87', 'Oh1f')](doTask, _0x1d88a6[_0x3b33('88', 'HCvz')], _0x3b33('89', '84]S') + ACT_ID + _0x3b33('8a', '*zxU') + $['shareCode'] + _0x3b33('8b', '0IOX') + encodeURIComponent($['secretPin']));
    let _0x471cf4 = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8];
    let _0x5a37fe = [];
    for (let _0x2782f6 = 0x0; _0x1d88a6[_0x3b33('8c', '2%6G')](_0x2782f6, $[_0x3b33('8d', 'aEHI')][_0x3b33('8e', 'zewy')]); _0x2782f6++) {
        const _0x5214c9 = $['cardList'][_0x2782f6];
        if (_0x1d88a6[_0x3b33('8f', 'YXiN')](_0x5214c9['position'], 0x63)) {
            _0x5a37fe['push'](_0x5214c9);
        }
        if (_0x1d88a6[_0x3b33('90', 'V]&W')](_0x5214c9[_0x3b33('91', '84]S')], 0x63)) {
            let _0x4b8c56 = _0x471cf4[_0x3b33('92', 'z24E')](_0x5214c9[_0x3b33('93', '2qnz')]);
            _0x471cf4[_0x3b33('94', 'P2OR')](_0x4b8c56, 0x1);
        }
    }
    if (_0x1d88a6[_0x3b33('95', '$d%u')](_0x5a37fe[_0x3b33('96', 'HCvz')], 0x0)) {
        console['log'](_0x3b33('97', 'MHn%'));
        return;
    }
    if (_0x1d88a6[_0x3b33('98', 'V]&W')](_0x5a37fe[_0x3b33('99', 'e^f0')], $[_0x3b33('9a', ')CMQ')])) {
        times = _0x5a37fe['length'];
    } else {
        times = $[_0x3b33('9b', 'P4Cr')];
    }
    for (let _0x17a791 = 0x0; _0x17a791 <= times; _0x17a791++) {
        let _0x457776 = '';
        const _0x2771a9 = questionList['filter'](_0x25d8e3 => _0x25d8e3['q'] === _0x5a37fe[_0x17a791][_0x3b33('9c', '2p$]')]);
        if (_0x2771a9 && _0x2771a9[0x0]) {
            console[_0x3b33('9d', 'HkA1')](_0x3b33('9e', '84]S') + _0x2771a9[0x0]['a']);
            _0x457776 = _0x2771a9[0x0]['a'];
        }
        let _0x2227c3 = _0x3b33('9f', 'GxlJ') + ACT_ID + '&actorUuid=' + $[_0x3b33('a0', '84]S')] + _0x3b33('a1', '%Hk@') + encodeURIComponent($[_0x3b33('a2', 'zKs$')]) + _0x3b33('a3', 'HkA1') + _0x5a37fe[_0x17a791][_0x3b33('a4', '(J&H')] + '&answer=' + _0x1d88a6['BkaDE'](encodeURIComponent, _0x457776) + _0x3b33('a5', 'YXiN') + _0x471cf4[_0x17a791];
        await _0x1d88a6[_0x3b33('a6', '2p$]')](doTask, _0x3b33('a7', '3QQj'), _0x2227c3);
        await $[_0x3b33('a8', 'HkA1')](0x5dc);
    }
}

async function getActContent(_0x5d0195 = !![], _0x45dbdc = '') {
    var _0x3241fa = {
        'BoDgT': function (_0x9ebbc, _0x2ed639) {
            return _0x9ebbc === _0x2ed639;
        }, 'PPPDS': function (_0x3c6d7d, _0x2256b2) {
            return _0x3c6d7d(_0x2256b2);
        }, 'KqOrS': _0x3b33('a9', 'P4Cr'), 'HwDkY': _0x3b33('aa', 'HkA1'), 'PNTXL': function (_0x4754c2, _0x56bf7b) {
            return _0x4754c2(_0x56bf7b);
        }, 'mfiGv': function (_0x36f1a6, _0x1d31f2) {
            return _0x36f1a6 + _0x1d31f2;
        }, 'JyZZM': function (_0x13447a, _0x162194) {
            return _0x13447a === _0x162194;
        }, 'wYFWy': function (_0x2aa6be, _0x18ff74, _0x379954) {
            return _0x2aa6be(_0x18ff74, _0x379954);
        }, 'vnqje': function (_0x4b99cf, _0x207df4, _0x1bb241) {
            return _0x4b99cf(_0x207df4, _0x1bb241);
        }, 'IawHb': function (_0x5bd6c7, _0x2595d1) {
            return _0x5bd6c7(_0x2595d1);
        }, 'BMUhH': _0x3b33('ab', 'M^8!')
    };
    return new Promise(_0x5639ef => {
        var _0x5cee1a = {
            'QNTrO': function (_0x52b92a, _0xbb2d6) {
                return _0x3241fa['BoDgT'](_0x52b92a, _0xbb2d6);
            },
            'hMxUh': function (_0x59154b, _0x11be8c) {
                return _0x59154b === _0x11be8c;
            },
            'pqdeg': function (_0x1bc47c, _0x1d34f7) {
                return _0x3241fa[_0x3b33('ac', '2qnz')](_0x1bc47c, _0x1d34f7);
            },
            'vYLBU': _0x3241fa[_0x3b33('ad', ')CMQ')],
            'JPICD': _0x3241fa[_0x3b33('ae', 'P4Cr')],
            'NzfjC': function (_0x293842, _0x23910f) {
                return _0x3241fa[_0x3b33('af', '@pos')](_0x293842, _0x23910f);
            },
            'LFyND': function (_0x149d6a, _0x14274c) {
                return _0x3241fa[_0x3b33('b0', '%Hk@')](_0x149d6a, _0x14274c);
            },
            'zNaFp': function (_0x14e4ac, _0x3663d8) {
                return _0x14e4ac(_0x3663d8);
            },
            'pbhok': function (_0x53a1f5, _0x269579) {
                return _0x53a1f5 === _0x269579;
            },
            'UOrUz': function (_0x1e8f82, _0x57a6ab) {
                return _0x3241fa['JyZZM'](_0x1e8f82, _0x57a6ab);
            },
            'VxxUu': _0x3b33('b1', 'FVHO'),
            'CpMoF': function (_0x43cbc5, _0x166a9e, _0x1a899f) {
                return _0x3241fa[_0x3b33('b2', '%Hk@')](_0x43cbc5, _0x166a9e, _0x1a899f);
            },
            'JFjmD': _0x3b33('b3', 'GxlJ'),
            'bCtUI': function (_0x2c9b6e, _0x3fec94, _0x52f515) {
                return _0x3241fa[_0x3b33('b4', 'mH*D')](_0x2c9b6e, _0x3fec94, _0x52f515);
            },
            'jhoKj': function (_0x1825ee, _0x4afda7, _0x4ad013) {
                return _0x1825ee(_0x4afda7, _0x4ad013);
            },
            'aViXl': function (_0x5769f2, _0x3bf4d5) {
                return _0x3241fa[_0x3b33('b5', 'Z3lq')](_0x5769f2, _0x3bf4d5);
            }
        };
        $['post'](taskPostUrl(_0x3241fa[_0x3b33('b6', ')CMQ')], _0x3b33('b7', 'zewy') + ACT_ID + '&pin=' + encodeURIComponent($['secretPin']) + '&pinImg=' + $[_0x3b33('b8', 'V]&W')] + _0x3b33('b9', 'z24E') + $[_0x3b33('ba', 'HCvz')] + _0x3b33('bb', 'FVHO') + _0x45dbdc), async (_0x469906, _0x1fca35, _0x23a766) => {
            try {
                if (_0x469906) {
                    console[_0x3b33('bc', 'mH*D')]('' + JSON[_0x3b33('bd', 'HkA1')](_0x469906));
                } else {
                    _0x23a766 = JSON['parse'](_0x23a766);
                    if (_0x5cee1a['QNTrO'](_0x23a766['result'], ![])) {
                        $[_0x3b33('be', 'cow&')] = !![];
                        console[_0x3b33('bf', '$d%u')](_0x3b33('c0', 'yXQW'));
                        return;
                    }
                    $[_0x3b33('c1', 'XEeE')] = _0x23a766['data']['cardScore'];
                    $[_0x3b33('c2', 'CBnk')] = _0x23a766[_0x3b33('c3', 'CM8L')][_0x3b33('c4', 'MHn%')];
                    $[_0x3b33('c5', '$d%u')] = _0x23a766['data'][_0x3b33('c6', 'z24E')];
                    $[_0x3b33('c7', '2%6G')] = _0x23a766['data'][_0x3b33('c8', 'zewy')];
                    $[_0x3b33('c9', ')CMQ')] = _0x23a766['data']['toShop'];
                    if (_0x5cee1a[_0x3b33('ca', 'e^f0')](_0x23a766['data'][_0x3b33('cb', 'g48g')], 0x9)) {
                        $['doJob'] = ![];
                        if (_0x5cee1a['hMxUh'](_0x23a766['data']['drawOrNo'], ![]) && _0x5cee1a['hMxUh'](_0x23a766[_0x3b33('cc', '*zxU')][_0x3b33('cd', 'z24E')], !![])) {
                            console['log'](_0x3b33('ce', 'FVHO'));
                            await doTask(_0x3b33('cf', '@pos'), 'activityId=' + ACT_ID + '&actorUuid=' + $[_0x3b33('a0', '84]S')] + '&pin=' + _0x5cee1a[_0x3b33('d0', ']gbe')](escape, $[_0x3b33('d1', 'Jf2A')]) + _0x3b33('d2', 'mH*D'));
                        }
                    }
                    if (_0x5d0195) {
                        for (let _0x46e5ce of [_0x5cee1a[_0x3b33('d3', 'VAaD')], _0x5cee1a['JPICD']]) {
                            let _0x50e946 = _0x23a766[_0x3b33('d4', 'P2OR')][_0x46e5ce];
                            for (let _0x2a2299 of _0x50e946[_0x3b33('d5', '2%6G')]) {
                                let _0x281c16 = 'activityId=' + ACT_ID + _0x3b33('d6', 'YXiN') + $[_0x3b33('d7', 'k@d*')] + _0x3b33('d8', '2%6G') + _0x5cee1a[_0x3b33('d9', 'aEHI')](encodeURIComponent, $['secretPin']) + _0x3b33('da', 'HCvz') + _0x2a2299['type'] + '&taskValue=' + _0x2a2299[_0x3b33('db', 'VAaD')];
                                let _0x1ecbbb = _0x3b33('dc', ')9[U') + _0x23a766[_0x3b33('dd', '2p$]')][_0x3b33('de', 'HCvz')] + _0x3b33('df', 'mH*D') + _0x5cee1a[_0x3b33('e0', '84]S')](encodeURIComponent, _0x5cee1a[_0x3b33('e1', 'W!ev')]('店铺', _0x2a2299[_0x3b33('e2', 'YXiN')])) + '&pageId=' + ACT_ID + '&pin=' + _0x5cee1a[_0x3b33('e3', 'g48g')](encodeURIComponent, $['secretPin']);
                                if (_0x5cee1a[_0x3b33('e4', '2%6G')](_0x2a2299[_0x3b33('e5', 'V]&W')], 0xc) && _0x5cee1a[_0x3b33('e6', ')CMQ')](_0x2a2299['status'], 0x0)) {
                                    console[_0x3b33('e7', 'Jf2A')]('浏览会场\x20-\x20' + _0x2a2299['name']);
                                    await doTask(_0x5cee1a['VxxUu'], _0x281c16);
                                    await $[_0x3b33('e8', 'P2OR')](0x7d0);
                                    await _0x5cee1a['CpMoF'](doTask, _0x5cee1a[_0x3b33('e9', 'yXQW')], _0x1ecbbb);
                                } else if (_0x5cee1a[_0x3b33('ea', ']gbe')](_0x2a2299[_0x3b33('eb', '2p$]')], 0x0)) {
                                    console['log'](_0x3b33('ec', 'FVHO') + _0x2a2299['name']);
                                    await _0x5cee1a[_0x3b33('ed', 'W!ev')](doTask, 'dingzhi/change/able/saveTask', _0x281c16);
                                    await $[_0x3b33('ee', 'P4Cr')](0x7d0);
                                }
                            }
                            await $[_0x3b33('ef', 'tfWT')](0x5dc);
                        }
                        await $[_0x3b33('f0', 'zKs$')](0x5dc);
                        await _0x5cee1a[_0x3b33('f1', '$d%u')](doTask, _0x5cee1a[_0x3b33('f2', ')CMQ')], 'activityId=' + ACT_ID + _0x3b33('f3', 'k@d*') + $[_0x3b33('46', 'HCvz')] + _0x3b33('f4', 'yXQW') + _0x5cee1a['aViXl'](encodeURIComponent, $[_0x3b33('f5', 'CM8L')]) + _0x3b33('f6', 'XEeE') + $[_0x3b33('f7', 'V]&W')][_0x3b33('f8', 'Z3lq')][0x0][_0x3b33('f9', 'CM8L')] + _0x3b33('fa', 'Jf2A') + $[_0x3b33('c5', '$d%u')][_0x3b33('fb', '@pos')][0x0][_0x3b33('fc', 'V]&W')]);
                    }
                }
            } catch (_0x2df7a0) {
                $[_0x3b33('fd', '2qnz')](_0x2df7a0, _0x1fca35);
            } finally {
                _0x5639ef(_0x23a766);
            }
        });
    });
}

function doTask(_0x231a05, _0x4ff197) {
    var _0x2614cf = {
        'RTiQQ': 'set-cookie',
        'sbltc': _0x3b33('fe', 'W!ev'),
        'XhBIW': _0x3b33('ff', 'e^f0'),
        'mlskx': function (_0x3a9837, _0x4a2450) {
            return _0x3a9837 !== _0x4a2450;
        },
        'WkWTa': _0x3b33('100', 'M^8!'),
        'ZKihL': function (_0x13b813, _0x4e7df2) {
            return _0x13b813 === _0x4e7df2;
        },
        'IAZJn': 'drawInfo',
        'UVZIw': _0x3b33('101', 'W!ev'),
        'jQrjp': function (_0xf0361b) {
            return _0xf0361b();
        },
        'QIYcd': function (_0x2cea0b, _0xcbc2d9, _0x20cb56) {
            return _0x2cea0b(_0xcbc2d9, _0x20cb56);
        }
    };
    return new Promise(_0x6542dd => {
        $[_0x3b33('102', ')9[U')](_0x2614cf[_0x3b33('103', 'g48g')](taskPostUrl, _0x231a05, _0x4ff197), (_0x9324a1, _0x76a0c4, _0x12875c) => {
            try {
                if (_0x9324a1) {
                    console['log']('' + JSON[_0x3b33('104', '3Dhq')](_0x9324a1));
                } else {
                    if (_0x12875c) {
                        _0x12875c = JSON['parse'](_0x12875c);
                        if (_0x76a0c4[_0x3b33('105', '(J&H')][_0x2614cf['RTiQQ']]) {
                            cookie = _0x76a0c4[_0x2614cf[_0x3b33('106', 'zKs$')]][_0x3b33('107', 'V]&W')][_0x3b33('108', 'XEeE')](';') + ';\x20' + originCookie;
                        }
                        if (_0x12875c['result'] === !![]) {
                            if (_0x12875c[_0x3b33('109', '@jhR')][_0x3b33('10a', 'PLOu')](_0x2614cf['XhBIW'])) {
                                $['gameScore'] += _0x12875c[_0x3b33('10b', 'k@d*')][_0x3b33('9b', 'P4Cr')];
                                if (_0x2614cf['mlskx'](_0x12875c['data'][_0x3b33('10c', '@pos')], 0x0)) {
                                    console[_0x3b33('e7', 'Jf2A')]('获得1次翻牌机会');
                                }
                            }
                            if (_0x12875c[_0x3b33('10d', '@pos')][_0x3b33('10e', 'HCvz')](_0x2614cf['WkWTa'])) {
                                $[_0x3b33('10f', ']gbe')] = _0x12875c[_0x3b33('110', 'VAaD')][_0x3b33('111', '%Hk@')];
                            }
                            if (_0x12875c[_0x3b33('112', 'FVHO')]['hasOwnProperty'](_0x3b33('113', '84]S'))) {
                                if (_0x2614cf[_0x3b33('114', 'GxlJ')](_0x12875c[_0x3b33('115', '2%6G')]['right'], !![])) {
                                    console[_0x3b33('116', '*zxU')](_0x3b33('117', 'R*y*'));
                                }
                            }
                            if (_0x12875c[_0x3b33('118', 'M^8!')][_0x3b33('119', 'XEeE')](_0x2614cf[_0x3b33('11a', '@jhR')])) {
                                if (_0x2614cf[_0x3b33('11b', 'mH*D')](_0x12875c[_0x3b33('11c', 'e^f0')][_0x3b33('11d', 'MHn%')], !![])) {
                                    message += '获得' + _0x12875c['data']['drawInfo'][_0x3b33('11e', '2qnz')] + '\x0a';
                                    console[_0x3b33('bc', 'mH*D')]('获得' + _0x12875c['data'][_0x3b33('11f', 'g48g')]['name'] + '\x0a');
                                    if (_0x12875c[_0x3b33('120', 'Z3lq')]['drawInfoType'] === 0x6) {
                                        $[_0x3b33('121', 'P2OR')] += _0x12875c[_0x3b33('122', 'zewy')]['drawInfo'][_0x3b33('123', '3QQj')];
                                    } else {
                                        message += '\x0a京东账号' + $[_0x3b33('124', '*zxU')] + '\x20' + ($['nickName'] || $['UserName']) + _0x3b33('125', '2%6G') + _0x12875c[_0x3b33('126', 'R*y*')]['drawInfo'][_0x3b33('127', 'YXiN')];
                                    }
                                } else {
                                    console[_0x3b33('128', 'tfWT')]('抽奖结果:' + _0x12875c[_0x3b33('129', 'YXiN')]);
                                }
                            }
                        } else {
                            console[_0x3b33('12a', 'H1&A')](_0x12875c['errorMessage']);
                        }
                    } else {
                        $['log'](_0x2614cf['UVZIw']);
                    }
                }
            } catch (_0x4450d4) {
                console[_0x3b33('116', '*zxU')](_0x4450d4, _0x76a0c4);
            } finally {
                _0x2614cf[_0x3b33('12b', 'zKs$')](_0x6542dd);
            }
        });
    });
}

function getAuthorCode(_0x3a7afe) {
    var _0x5c834f = {
        'iOvjq': function (_0x47279c, _0xc72800) {
            return _0x47279c(_0xc72800);
        }
    };
    return new Promise(async _0x4d2679 => {
        var _0x48c70c = {
            'fjpxH': function (_0x284a5f, _0x24b92d) {
                return _0x5c834f['iOvjq'](_0x284a5f, _0x24b92d);
            }
        };
        $[_0x3b33('12c', 'zKs$')]({'url': _0x3b33('12d', 'tfWT') + _0x3a7afe}, (_0x411656, _0x25bd51, _0x6c6463) => {
            try {
                if (_0x411656) {
                    console['log']('' + JSON[_0x3b33('12e', 'k@d*')](_0x411656));
                } else {
                    if (_0x6c6463) {
                        _0x6c6463 = JSON[_0x3b33('12f', 'GxlJ')](_0x6c6463);
                        if (_0x6c6463[_0x3b33('d4', 'P2OR')][_0x3b33('130', ')CMQ')] > 0x0) {
                            $[_0x3b33('131', '3QQj')] = _0x6c6463[_0x3b33('c3', 'CM8L')][0x0]['share_code'];
                        } else {
                            $['authorShareCode'] = '';
                        }
                    }
                }
            } catch (_0x5a0d09) {
                $[_0x3b33('132', '@jhR')](_0x5a0d09, _0x25bd51);
            } finally {
                _0x48c70c[_0x3b33('133', ')9[U')](_0x4d2679, _0x6c6463);
            }
        });
    });
}

function getUserInfo() {
    var _0x45c5ce = {
        'VxtVU': function (_0x5406a8, _0x2ba828) {
            return _0x5406a8(_0x2ba828);
        }, 'jmmzQ': function (_0x444831, _0x3b7dc5, _0xa943fc) {
            return _0x444831(_0x3b7dc5, _0xa943fc);
        }, 'OSUUM': _0x3b33('134', '2%6G')
    };
    return new Promise(_0xa8d568 => {
        let _0x1bc2ec = _0x3b33('135', 'z24E') + _0x45c5ce[_0x3b33('136', 'H1&A')](encodeURIComponent, $[_0x3b33('137', 'z24E')]);
        $[_0x3b33('138', 'PLOu')](_0x45c5ce[_0x3b33('139', '(J&H')](taskPostUrl, _0x45c5ce[_0x3b33('13a', 'z24E')], _0x1bc2ec), async (_0x3076f9, _0x37d485, _0x7308d0) => {
            try {
                if (_0x3076f9) {
                    console['log']('' + JSON['stringify'](_0x3076f9));
                } else {
                    _0x7308d0 = JSON[_0x3b33('13b', 'U37e')](_0x7308d0);
                    if (_0x7308d0[_0x3b33('dd', '2p$]')]) {
                        console[_0x3b33('13c', '84]S')](_0x3b33('13d', '2qnz') + _0x7308d0[_0x3b33('13e', 'mH*D')]['nickname'] + _0x3b33('13f', 'yXQW'));
                        $[_0x3b33('140', 'g48g')] = _0x7308d0['data']['id'];
                        $['pinImg'] = _0x7308d0['data'][_0x3b33('141', 'U37e')];
                        $[_0x3b33('142', 'aEHI')] = _0x7308d0[_0x3b33('10b', 'k@d*')][_0x3b33('143', 'aEHI')];
                    } else {
                        console[_0x3b33('144', 'XEeE')](_0x7308d0);
                    }
                }
            } catch (_0x4e3210) {
                $[_0x3b33('145', '3QQj')](_0x4e3210, _0x37d485);
            } finally {
                _0x45c5ce[_0x3b33('146', 'tfWT')](_0xa8d568, _0x7308d0);
            }
        });
    });
}

function getMyPing() {
    var _0x531f6f = {
        'mlrgU': function (_0x5a4135) {
            return _0x5a4135();
        }, 'IzVAi': _0x3b33('147', ')9[U')
    };
    return new Promise(_0x9f684a => {
        $[_0x3b33('148', '3Dhq')](taskPostUrl(_0x531f6f['IzVAi'], 'userId=' + $['shopId'] + _0x3b33('149', 'V]&W') + $[_0x3b33('14a', '3QQj')] + _0x3b33('14b', '(J&H')), async (_0x3d1fbc, _0x20279e, _0x3a5cf4) => {
            try {
                if (_0x3d1fbc) {
                    console[_0x3b33('14c', 'Z3lq')]('' + JSON[_0x3b33('14d', 'g48g')](_0x3d1fbc));
                } else {
                    _0x3a5cf4 = JSON[_0x3b33('14e', 'W!ev')](_0x3a5cf4);
                    if (_0x3a5cf4[_0x3b33('14f', 'Jf2A')]) {
                        $[_0x3b33('150', '2qnz')] = _0x3a5cf4['data'][_0x3b33('151', '2p$]')];
                        cookie = _0x3b33('152', 'V]&W') + $[_0x3b33('153', '3Dhq')] + ';' + cookie;
                    }
                }
            } catch (_0xecea1d) {
                $[_0x3b33('154', 'P2OR')](_0xecea1d, _0x20279e);
            } finally {
                _0x531f6f['mlrgU'](_0x9f684a);
            }
        });
    });
}

function getActInfo() {
    var _0x50cc3c = {
        'SKAXk': function (_0x48d08e, _0xfb1225) {
            return _0x48d08e(_0xfb1225);
        }, 'Vmuji': function (_0x39d57c, _0x60e0c1, _0x4a3715) {
            return _0x39d57c(_0x60e0c1, _0x4a3715);
        }
    };
    return new Promise(_0x428154 => {
        $[_0x3b33('155', 'P4Cr')](_0x50cc3c['Vmuji'](taskPostUrl, _0x3b33('156', '3Dhq'), _0x3b33('157', ')CMQ') + ACT_ID), async (_0x45bfa9, _0x49df7d, _0xc3ffe8) => {
            try {
                if (_0x45bfa9) {
                    console[_0x3b33('158', 'z24E')]('' + JSON[_0x3b33('159', ']gbe')](_0x45bfa9));
                } else {
                    _0xc3ffe8 = JSON[_0x3b33('15a', 'k@d*')](_0xc3ffe8);
                    if (_0xc3ffe8[_0x3b33('15b', 'VAaD')]) {
                        $['shopId'] = _0xc3ffe8[_0x3b33('6e', 'z24E')][_0x3b33('15c', 'CBnk')];
                    }
                }
            } catch (_0x27ca67) {
                $['logErr'](_0x27ca67, _0x49df7d);
            } finally {
                _0x50cc3c[_0x3b33('15d', 'cow&')](_0x428154, _0xc3ffe8);
            }
        });
    });
}

function grantTokenKey() {
    var _0x34b402 = {
        'wsbAY': function (_0x596534, _0x37d284) {
            return _0x596534 === _0x37d284;
        },
        'RFaNq': _0x3b33('15e', 'P4Cr'),
        'aZhHy': _0x3b33('15f', 'zKs$'),
        'mXzyu': _0x3b33('160', '2p$]'),
        'bYpxw': _0x3b33('161', 'W!ev'),
        'QPMmI': _0x3b33('162', '3Dhq')
    };
    let _0x3183dd = {
        'url': _0x34b402[_0x3b33('163', 'e^f0')],
        'headers': {
            'Host': _0x3b33('164', 'R*y*'),
            'Content-Type': _0x34b402[_0x3b33('165', 'P2OR')],
            'Accept': _0x3b33('166', 'z24E'),
            'Connection': _0x3b33('167', '84]S'),
            'Cookie': cookie,
            'User-Agent': _0x34b402['mXzyu'],
            'Accept-Language': _0x34b402[_0x3b33('168', ')9[U')],
            'Accept-Encoding': _0x34b402[_0x3b33('169', ')9[U')]
        },
        'body': _0x3b33('16a', '@jhR')
    };
    return new Promise(_0x3e05b2 => {
        $[_0x3b33('16b', 'VAaD')](_0x3183dd, (_0x53ad74, _0x4cab13, _0x2fdabe) => {
            try {
                if (_0x53ad74) {
                    console[_0x3b33('16c', 'yXQW')]('' + JSON[_0x3b33('16d', '%Hk@')](_0x53ad74));
                } else {
                    _0x2fdabe = JSON[_0x3b33('16e', 'zewy')](_0x2fdabe);
                    if (_0x34b402['wsbAY'](_0x2fdabe['code'], '0')) {
                        $[_0x3b33('16f', 'Z3lq')] = _0x2fdabe[_0x3b33('170', 'z24E')];
                        cookie = cookie + 'IsvToken=' + $[_0x3b33('171', '3QQj')];
                    }
                }
            } catch (_0x14c02c) {
                console[_0x3b33('bf', '$d%u')](_0x14c02c, _0x4cab13);
            } finally {
                _0x3e05b2();
            }
        });
    });
}

function grantToken() {
    var _0x4fc8af = {
        'JzZDj': function (_0x214c1b, _0xa5ff1e) {
            return _0x214c1b === _0xa5ff1e;
        },
        'MdIdS': function (_0x4c3f23) {
            return _0x4c3f23();
        },
        'OMQsV': _0x3b33('172', 'XEeE'),
        'jijIk': _0x3b33('173', 'HkA1'),
        'WqxQh': 'application/x-www-form-urlencoded',
        'UexhR': _0x3b33('174', 'VAaD'),
        'gsRff': 'gzip,\x20deflate,\x20br'
    };
    let _0x2de4b7 = {
        'url': _0x4fc8af['OMQsV'],
        'headers': {
            'Host': _0x4fc8af[_0x3b33('175', 'k@d*')],
            'Content-Type': _0x4fc8af[_0x3b33('176', ')9[U')],
            'Accept': _0x3b33('177', ']gbe'),
            'Connection': _0x3b33('178', 'HkA1'),
            'Cookie': cookie,
            'User-Agent': _0x3b33('179', ')9[U'),
            'Accept-Language': _0x4fc8af[_0x3b33('17a', '2p$]')],
            'Accept-Encoding': _0x4fc8af[_0x3b33('17b', 'W!ev')]
        },
        'body': _0x3b33('17c', 'cow&')
    };
    return new Promise(_0x4bca36 => {
        $[_0x3b33('17d', 'FVHO')](_0x2de4b7, (_0x3524e8, _0x2f4c74, _0x27f3c9) => {
            try {
                if (_0x3524e8) {
                    console[_0x3b33('17e', 'k@d*')]('' + JSON[_0x3b33('17f', 'XEeE')](_0x3524e8));
                } else {
                    _0x27f3c9 = JSON[_0x3b33('180', 'FVHO')](_0x27f3c9);
                    if (_0x4fc8af[_0x3b33('181', '2p$]')](_0x27f3c9[_0x3b33('182', 'zewy')], '0')) {
                        $['token'] = _0x27f3c9[_0x3b33('183', 'PLOu')];
                    }
                }
            } catch (_0xfde584) {
                console[_0x3b33('184', '2qnz')](_0xfde584);
            } finally {
                _0x4fc8af[_0x3b33('185', 'mH*D')](_0x4bca36);
            }
        });
    });
}

function getActCookie() {
    var _0x469381 = {
        'DXZYv': 'set-cookie',
        'sDBpq': _0x3b33('186', ']gbe'),
        'lmBax': _0x3b33('187', 'U37e'),
        'bgGxJ': function (_0xbe47ba) {
            return _0xbe47ba();
        },
        'dpTtY': 'keep-alive',
        'rOHpJ': _0x3b33('188', 'k@d*'),
        'knERb': _0x3b33('189', 'g48g'),
        'QYxYn': 'gzip,\x20deflate,\x20br'
    };
    let _0x5972fd = {
        'url': _0x3b33('18a', 'R*y*') + ACT_ID,
        'headers': {
            'Content-Type': _0x3b33('18b', 'k@d*'),
            'Accept': _0x3b33('18c', '3Dhq'),
            'Connection': _0x469381['dpTtY'],
            'Cookie': '' + cookie,
            'User-Agent': _0x469381[_0x3b33('18d', 'CBnk')],
            'Accept-Language': _0x469381[_0x3b33('18e', 'Z3lq')],
            'Accept-Encoding': _0x469381['QYxYn']
        }
    };
    return new Promise(_0x3106f4 => {
        $[_0x3b33('18f', 'M^8!')](_0x5972fd, (_0x164d18, _0x16b8b5, _0x4f1e8b) => {
            try {
                if (_0x164d18) {
                    console['log']('' + JSON[_0x3b33('190', 'e^f0')](_0x164d18));
                } else {
                    cookie = cookie + ';';
                    if ($['isNode']()) for (let _0x2f85f5 of _0x16b8b5['headers'][_0x469381['DXZYv']]) {
                        cookie = '' + cookie + _0x2f85f5['split'](';')[0x0] + ';';
                    } else {
                        for (let _0x5e7f04 of _0x16b8b5[_0x469381[_0x3b33('191', '@jhR')]][_0x469381['lmBax']][_0x3b33('192', 'eWpX')](',')) {
                            cookie = '' + cookie + _0x5e7f04[_0x3b33('193', ']gbe')](';')[0x0] + ';';
                        }
                    }
                }
            } catch (_0x2a009b) {
                console[_0x3b33('9d', 'HkA1')](_0x2a009b);
            } finally {
                _0x469381[_0x3b33('194', '2qnz')](_0x3106f4);
            }
        });
    });
}

function taskPostUrl(_0x57c2f8, _0x2ba75a) {
    var _0xc9f0d2 = {
        'jtLZU': _0x3b33('195', 'g48g'),
        'VUsYR': 'application/json',
        'ehdrN': _0x3b33('196', '0IOX'),
        'qJDvR': 'gzip,\x20deflate,\x20br',
        'avkjz': _0x3b33('197', 'H1&A'),
        'OzTYH': _0x3b33('198', ')9[U')
    };
    return {
        'url': _0x3b33('199', 'PLOu') + _0x57c2f8,
        'headers': {
            'Host': _0xc9f0d2[_0x3b33('19a', 'Z3lq')],
            'Accept': _0xc9f0d2[_0x3b33('19b', 'U37e')],
            'X-Requested-With': _0xc9f0d2[_0x3b33('19c', 'YXiN')],
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': _0xc9f0d2[_0x3b33('19d', '84]S')],
            'Content-Type': _0xc9f0d2[_0x3b33('19e', 'W!ev')],
            'Origin': _0x3b33('19f', 'z24E'),
            'Connection': _0x3b33('1a0', '3Dhq'),
            'Referer': 'https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity?activityId=' + ACT_ID,
            'Cookie': '' + cookie,
            'User-Agent': _0xc9f0d2[_0x3b33('1a1', 'U37e')]
        },
        'body': _0x2ba75a
    };
}

function getShareCode() {
    var _0x4e1121 = {
        'OdmKd': function (_0x9f620b, _0x3817aa) {
            return _0x9f620b > _0x3817aa;
        }, 'TnsGw': function (_0x550589, _0x26dafb) {
            return _0x550589(_0x26dafb);
        }
    };
    return new Promise(async _0x21bb66 => {
        var _0x49bae0 = {
            'SIrLg': function (_0x28c394, _0x2407ab) {
                return _0x4e1121[_0x3b33('1a2', 'e^f0')](_0x28c394, _0x2407ab);
            }, 'oICMI': function (_0x322de8, _0x2de196) {
                return _0x4e1121[_0x3b33('1a3', 'GxlJ')](_0x322de8, _0x2de196);
            }
        };
        $['get']({'url': _0x3b33('1a4', '0IOX')}, (_0x126ffc, _0x316f1f, _0x2ada51) => {
            try {
                if (_0x126ffc) {
                    console[_0x3b33('1a5', 'cow&')]('' + JSON['stringify'](_0x126ffc));
                } else {
                    if (_0x2ada51) {
                        _0x2ada51 = JSON[_0x3b33('1a6', '3Dhq')](_0x2ada51);
                        if (_0x49bae0[_0x3b33('1a7', 'W!ev')](_0x2ada51['data'][_0x3b33('1a8', '2p$]')], 0x0)) {
                            $[_0x3b33('1a9', 'R*y*')] = _0x2ada51['data'][0x0][_0x3b33('1aa', 'MHn%')];
                        } else {
                            $[_0x3b33('1ab', '0IOX')] = '';
                        }
                    }
                }
            } catch (_0x13ca16) {
                $[_0x3b33('1ac', 'PLOu')](_0x13ca16, _0x316f1f);
            } finally {
                _0x49bae0[_0x3b33('1ad', '$d%u')](_0x21bb66, _0x2ada51);
            }
        });
    });
}

function submitShareCode(_0x2e608d) {
    var _0x402c46 = {
        'GGTBf': function (_0x33952f, _0x5b3413) {
            return _0x33952f(_0x5b3413);
        }, 'XcWOs': 'application/json'
    };
    let _0x5a44b0 = {
        'url': _0x3b33('1ae', 'mH*D'),
        'headers': {'Content-Type': _0x402c46['XcWOs']},
        'body': JSON[_0x3b33('14d', 'g48g')](_0x2e608d)
    };
    return new Promise(async _0x173ca9 => {
        var _0x3f481b = {
            'yLBKL': function (_0x177163, _0x351d38) {
                return _0x402c46[_0x3b33('1af', 'tfWT')](_0x177163, _0x351d38);
            }
        };
        $[_0x3b33('1b0', 'H1&A')](_0x5a44b0, (_0x5e8e96, _0x3c4abd, _0x2beed2) => {
            try {
                if (_0x5e8e96) {
                    console['log']('' + JSON['stringify'](_0x5e8e96));
                    console['log']($['name'] + _0x3b33('1b1', 'HCvz'));
                } else {
                    _0x2beed2 = JSON[_0x3b33('1b2', 'yXQW')](_0x2beed2);
                    console[_0x3b33('1b3', ')CMQ')](_0x2beed2[_0x3b33('1b4', '2%6G')]);
                }
            } catch (_0x324d8b) {
                $[_0x3b33('1b5', '2p$]')](_0x324d8b, _0x3c4abd);
            } finally {
                _0x3f481b[_0x3b33('1b6', 'U37e')](_0x173ca9, _0x2beed2);
            }
        });
    });
}

function TotalBean() {
    var _0x293714 = {
        'MSuHy': 'retcode',
        'QwdMu': _0x3b33('1b7', ')CMQ'),
        'dQeoF': _0x3b33('1b8', 'yXQW'),
        'cMMoe': _0x3b33('1b9', 'Jf2A'),
        'SLWSS': _0x3b33('1ba', 'MHn%')
    };
    return new Promise(async _0xe2bd95 => {
        var _0x112715 = {
            'pgCnb': _0x293714[_0x3b33('1bb', '$d%u')],
            'DPIEN': _0x293714[_0x3b33('1bc', '0IOX')],
            'tPZlh': function (_0x563b49) {
                return _0x563b49();
            }
        };
        const _0x179739 = {
            'url': _0x3b33('1bd', 'GxlJ'),
            'headers': {
                'Accept': 'application/json,text/plain,\x20*/*',
                'Content-Type': _0x3b33('1be', 'VAaD'),
                'Accept-Encoding': _0x3b33('1bf', 'CM8L'),
                'Accept-Language': 'zh-cn',
                'Connection': _0x293714[_0x3b33('1c0', '2qnz')],
                'Cookie': cookie,
                'Referer': _0x3b33('1c1', 'CBnk'),
                'User-Agent': $['isNode']() ? process[_0x3b33('1c2', 'mH*D')]['JD_USER_AGENT'] ? process[_0x3b33('1c3', 'MHn%')][_0x3b33('1c4', 'R*y*')] : _0x3b33('1c5', 'PLOu') : $[_0x3b33('1c6', ')9[U')](_0x293714['cMMoe']) ? $[_0x3b33('1c7', 'Oh1f')](_0x293714[_0x3b33('1c8', 'R*y*')]) : _0x293714['SLWSS']
            }
        };
        $[_0x3b33('1c9', 'eWpX')](_0x179739, (_0x29aea6, _0x4faea7, _0x4bb908) => {
            try {
                if (_0x29aea6) {
                    console['log']('' + JSON['stringify'](_0x29aea6));
                    console[_0x3b33('1ca', ')9[U')]($[_0x3b33('1cb', '2p$]')] + '\x20API请求失败，请检查网路重试');
                } else {
                    if (_0x4bb908) {
                        _0x4bb908 = JSON[_0x3b33('1cc', 'MHn%')](_0x4bb908);
                        if (_0x4bb908[_0x112715[_0x3b33('1cd', 'e^f0')]] === 0xd) {
                            $['isLogin'] = ![];
                            return;
                        }
                        $[_0x3b33('11', 'R*y*')] = _0x4bb908[_0x112715[_0x3b33('1ce', 'HkA1')]][_0x3b33('1cf', 'V]&W')];
                    } else {
                        console[_0x3b33('1d0', '@jhR')](_0x3b33('1d1', '(J&H'));
                    }
                }
            } catch (_0x31027d) {
                $[_0x3b33('1d2', 'GxlJ')](_0x31027d, _0x4faea7);
            } finally {
                _0x112715[_0x3b33('1d3', 'HkA1')](_0xe2bd95);
            }
        });
    });
};_0xodh = 'jsjiami.com.v6';

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
