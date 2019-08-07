// 引入mockjs
import Mock from 'mockjs'
const url = '/test/getInfo'
Mock.mock(RegExp(url + '.*'), 'get', {
  title: 'this is a test',
  value: 20181105
})
export default Mock
