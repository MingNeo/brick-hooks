const json = [
  {
    id: '110000',
    name: '北京市',
  },
  {
    id: '110100',
    name: '北京市',
    pid: '110000',
  },
  {
    id: '110101',
    name: '东城区',
    pid: '110100',
  },
  {
    id: '110102',
    name: '西城区',
    pid: '110100',
  },
  {
    id: '110105',
    name: '朝阳区',
    pid: '110100',
  },
  {
    id: '110106',
    name: '丰台区',
    pid: '110100',
  },
  {
    id: '110107',
    name: '石景山区',
    pid: '110100',
  },
  {
    id: '110108',
    name: '海淀区',
    pid: '110100',
  },
  {
    id: '110109',
    name: '门头沟区',
    pid: '110100',
  },
  {
    id: '110111',
    name: '房山区',
    pid: '110100',
  },
  {
    id: '110112',
    name: '通州区',
    pid: '110100',
  },
  {
    id: '110113',
    name: '顺义区',
    pid: '110100',
  },
  {
    id: '110114',
    name: '昌平区',
    pid: '110100',
  },
  {
    id: '110115',
    name: '大兴区',
    pid: '110100',
  },
  {
    id: '110116',
    name: '怀柔区',
    pid: '110100',
  },
  {
    id: '110117',
    name: '平谷区',
    pid: '110100',
  },
  {
    id: '110118',
    name: '密云区',
    pid: '110100',
  },
  {
    id: '110119',
    name: '延庆区',
    pid: '110100',
  },
  {
    id: '120000',
    name: '天津市',
  },
  {
    id: '120100',
    name: '市辖区',
    pid: '120000',
  },
  {
    id: '120101',
    name: '和平区',
    pid: '120100',
  },
  {
    id: '120102',
    name: '河东区',
    pid: '120100',
  },
  {
    id: '120103',
    name: '河西区',
    pid: '120100',
  },
  {
    id: '120104',
    name: '南开区',
    pid: '120100',
  },
  {
    id: '120105',
    name: '河北区',
    pid: '120100',
  },
  {
    id: '120106',
    name: '红桥区',
    pid: '120100',
  },
  {
    id: '120110',
    name: '东丽区',
    pid: '120100',
  },
  {
    id: '120111',
    name: '西青区',
    pid: '120100',
  },
  {
    id: '120112',
    name: '津南区',
    pid: '120100',
  },
  {
    id: '120113',
    name: '北辰区',
    pid: '120100',
  },
  {
    id: '120114',
    name: '武清区',
    pid: '120100',
  },
  {
    id: '120115',
    name: '宝坻区',
    pid: '120100',
  },
  {
    id: '120116',
    name: '滨海新区',
    pid: '120100',
  },
  {
    id: '120117',
    name: '宁河区',
    pid: '120100',
  },
  {
    id: '120118',
    name: '静海区',
    pid: '120100',
  },
  {
    id: '120119',
    name: '蓟州区',
    pid: '120100',
  },
  {
    id: '130000',
    name: '河北省',
  },
  {
    id: '130100',
    name: '石家庄市',
    pid: '130000',
  },
  {
    id: '130200',
    name: '唐山市',
    pid: '130000',
  },
  {
    id: '130101',
    name: '市辖区',
    pid: '130100',
  },
  {
    id: '130102',
    name: '长安区',
    pid: '130100',
  },
  {
    id: '130104',
    name: '桥西区',
    pid: '130100',
  },
  {
    id: '130105',
    name: '新华区',
    pid: '130100',
  },
  {
    id: '130107',
    name: '井陉矿区',
    pid: '130100',
  },
  {
    id: '130108',
    name: '裕华区',
    pid: '130100',
  },
  {
    id: '130109',
    name: '藁城区',
    pid: '130100',
  },
  {
    id: '130110',
    name: '鹿泉区',
    pid: '130100',
  },
  {
    id: '130111',
    name: '栾城区',
    pid: '130100',
  },
  {
    id: '130121',
    name: '井陉县',
    pid: '130100',
  },
  {
    id: '130123',
    name: '正定县',
    pid: '130100',
  },
  {
    id: '130125',
    name: '行唐县',
    pid: '130100',
  },
  {
    id: '130126',
    name: '灵寿县',
    pid: '130100',
  },
  {
    id: '130127',
    name: '高邑县',
    pid: '130100',
  },
  {
    id: '130128',
    name: '深泽县',
    pid: '130100',
  },
  {
    id: '130129',
    name: '赞皇县',
    pid: '130100',
  },
  {
    id: '130130',
    name: '无极县',
    pid: '130100',
  },
  {
    id: '130131',
    name: '平山县',
    pid: '130100',
  },
  {
    id: '130132',
    name: '元氏县',
    pid: '130100',
  },
  {
    id: '130133',
    name: '赵县',
    pid: '130100',
  },
  {
    id: '130183',
    name: '晋州市',
    pid: '130100',
  },
  {
    id: '130184',
    name: '新乐市',
    pid: '130100',
  },
  {
    id: '130201',
    name: '市辖区',
    pid: '130200',
  },
  {
    id: '130202',
    name: '路南区',
    pid: '130200',
  },
  {
    id: '130203',
    name: '路北区',
    pid: '130200',
  },
  {
    id: '130204',
    name: '古冶区',
    pid: '130200',
  },
  {
    id: '130205',
    name: '开平区',
    pid: '130200',
  },
  {
    id: '130207',
    name: '丰南区',
    pid: '130200',
  },
  {
    id: '130208',
    name: '丰润区',
    pid: '130200',
  },
  {
    id: '130209',
    name: '曹妃甸区',
    pid: '130200',
  },
  {
    id: '130223',
    name: '滦县',
    pid: '130200',
  },
  {
    id: '130224',
    name: '滦南县',
    pid: '130200',
  },
  {
    id: '130225',
    name: '乐亭县',
    pid: '130200',
  },
  {
    id: '130227',
    name: '迁西县',
    pid: '130200',
  },
  {
    id: '130229',
    name: '玉田县',
    pid: '130200',
  },
  {
    id: '130281',
    name: '遵化市',
    pid: '130200',
  },
  {
    id: '130283',
    name: '迁安市',
    pid: '130200',
  },
]

export default json
