<template>
<div>
  <div class="right-content" v-if="clientWidth >= 768">
    <div class="statistics-box">
      <div class="dashboard first">
        <span class="first-left">
          Building
        </span>
        <span class="icon-cog first-center"></span>
        <span class="first-right">3</span>
      </div>
      <div class="dashboard second">
        <span class="second-left">
          Idle
        </span>
        <span class="icon-coffee second-center"></span>
        <span class="second-right">5</span>
      </div>
      <div class="dashboard third">
        <div class="third-title-line">
          <ul class="title-list">
          <li>All</li>
          <li>Physical</li>
          <li>Virtual</li>
        </ul>
        </div>
        <div class="third-content-line">
          <ul class="title-list">
          <li>8</li>
          <li>4</li>
          <li>4</li>
        </ul>
        </div>
      </div>
    </div>
    <div class="nav-container">
      <ul class="nav-list">
        <li>All</li>
        <li>Physical</li>
        <li>Virtual</li>
      </ul>
      <div class="input-container">
        <span class="icon-search"></span>
        <input type="text" class="input-search"/>
      </div>
      <div class="menu-container">
        <span class="icon-th-card menu-icon"></span>
        <span class="icon-th-list menu-icon"></span>
      </div>
    </div>
    <div class="types-container">
      <div v-for="(item, index) in datas" :key="item.title" class="datas-box">
        <img :src="os[item.os]" alt="search" class="datas-icon"/>
        <div class="datas-detail">
          <div class="detail-top">
            <span class="icon-desktop title-icon"></span>
            <span class="datas-title">{{ item.name }}</span>
            <span class="datas-tag" :style="{background: item.status === 'building' ? '#81ba43': '#fd993a'}">{{ item.status }}</span>
            <span class="icon-info title-icon-info"></span>
            <span class="icon-ip">{{ item.ip }}</span>
            <span class="icon-folder title-icon"></span>
            <span class="icon-path">{{ item.location }}</span>
          </div>
          <div class="detail-bottom">
            <div class="operate-area">
              <div class="add-btn" @click.stop="addBrower(index)">
                <span class="icon-plus"></span>
                <span class="icon-angle-up toast-up" v-if="item.showToast"></span>
                <div v-if="item.showToast" class="add-modal">
                  <div class="add-desc">Separate multiple resource name with commas</div>
                  <span class="icon-close closeToast" @click.stop="closeToast(index)"></span>
                  <input type="text" class="add-input" placeholder="Ubuntu,Chrome" v-model="systemName"/>
                  <div class="submit-area">
                    <div class="add-resource" @click.stop="adddoms(index)">Add Resources</div>
                    <div class="cancel-add"  @click.stop="closeToast(index)">Cancel</div>
                  </div>
                </div>
              </div>
              <!-- 浏览器 -->
              <div class="system-operate"  v-for="(d,index) in item.resources" :key="index" v-html="d">
                {{ d }}
                <!-- <span class="icon-trash" style="color: #333;"></span> -->
              </div>
            </div>
            <div class="operate-deny"><span class="icon-deny"></span>Deny</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 手机 -->
  <div class="phone-page" v-if="clientWidth < 768">
    <div class="statistics-box">
      <div class="dashboard first">
        <span class="first-left">
          Building
        </span>
        <span class="icon-cog first-center"></span>
        <span class="first-right">3</span>
      </div>
      <div class="dashboard second">
        <span class="second-left">
          Idle
        </span>
        <span class="icon-coffee second-center"></span>
        <span class="second-right">5</span>
      </div>
      <div class="third">
        <div class="third-title-line">
          <ul class="title-list">
          <li>All</li>
          <li>Physical</li>
          <li>Virtual</li>
        </ul>
        </div>
        <div class="third-content-line">
          <ul class="title-list">
          <li>8</li>
          <li>4</li>
          <li>4</li>
        </ul>
        </div>
      </div>
    </div>
    <div class="input-back">
      <div class="input-container">
        <span class="icon-search"></span>
        <input type="text" class="input-search"/>
      </div>
    </div>
    <div class="nav-container">
      <ul class="nav-list">
        <li class="">All</li>
        <li class="center-li">Physical</li>
        <li>Virtual</li>
      </ul>
    </div>
    <div class="types-container">
      <div v-for="(item, index) in datas" :key="item.title" class="datas-box">
        <!-- <img :src="item.icon" alt="search" class="datas-icon"/> -->
        <div class="datas-detail">
          <div class="detail-top">
            <span class="icon-desktop title-icon"></span>
            <span class="datas-title">{{ item.name }}</span>
          </div>
          <div>
            <div>
              <span class="icon-info title-icon-info"></span>
              <span class="icon-ip">{{ item.ip }}</span>
            </div>
            <div>
              <span class="icon-folder title-icon-info"></span>
              <span class="icon-path">{{ item.location }}</span>
            </div>
          </div>
          <div class="detail-bottom">
            <div class="operate-area">
              <div class="add-btn" @click.stop="addBrower(index)">
                <span class="icon-plus"></span>
                <div v-if="item.showToast" class="add-modal">
                  <div class="tops">
                    <div class="add-desc">Separate multiple resource name with commas</div>
                    <span class="icon-close closeToast" @click.stop="closeToast(index)"></span>
                  </div>
                  <input type="text" class="add-input" placeholder="Ubuntu,Chrome" v-model="systemName"/>
                  <div class="submit-area">
                    <div class="add-resource" @click="adddoms(index)">Add Resources</div>
                  </div>
                </div>
              </div>
              <!-- 浏览器 -->
              <div class="system-operate"  v-for="(d,index) in item.resources" :key="index" v-html="d">
                {{ d }}
                <!-- <span class="icon-trash" style="color: #333;"></span> -->
              </div>
            </div>
            <div class="operate-deny"><span class="icon-deny"></span>Deny</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import agents from '../../utils/db.json'
// import * as apis from '../../API/qq'
import 'whatwg-fetch'
export default {
  data () {
    return {
      // datas: [
      //   {
      //     id: 1,
      //     icon: '../../../static/imgs/windows.png',
      //     title: 'bgstdmngbgr01.thougntworks.com',
      //     tag: 'idle',
      //     ip: '192.168.1.102',
      //     path: '/var/lib/cruise-gent',
      //     showToast: false,
      //     table: []
      //   },
      //   {
      //     id: 2,
      //     icon: '../../../static/imgs/windows.png',
      //     title: 'bgstdmngbgr08.thougntworks.com',
      //     tag: 'idle',
      //     ip: '192.168.1.102',
      //     path: '/var/lib/cruise-gent',
      //     showToast: false,
      //     table: []
      //   },
      //   {
      //     id: 3,
      //     icon: '../../../static/imgs/ubuntu.png',
      //     title: 'bgstdmngbgr10.thougntworks.com',
      //     tag: 'idle',
      //     ip: '192.168.1.102',
      //     path: '/var/lib/cruise-gent',
      //     showToast: false,
      //     table: []
      //   },
      //   {
      //     id: 4,
      //     icon: '../../../static/imgs/debin.png',
      //     title: 'bgstdmngbgr11.thougntworks.com',
      //     tag: 'idle',
      //     ip: '192.168.1.102',
      //     path: '/var/lib/cruise-gent',
      //     showToast: false,
      //     table: []
      //   },
      //   {
      //     id: 5,
      //     icon: '../../../static/imgs/suse.png',
      //     title: 'bgstdmngbgr15.thougntworks.com',
      //     tag: 'idle',
      //     ip: '192.168.1.102',
      //     path: '/var/lib/cruise-gent',
      //     showToast: false,
      //     table: []
      //   },
      //   {
      //     id: 6,
      //     icon: '../../../static/imgs/cent_os.png',
      //     title: 'bgstdmngbgr011.thougntworks.com',
      //     tag: 'idle',
      //     ip: '192.168.1.102',
      //     path: '/var/lib/cruise-gent',
      //     showToast: false,
      //     table: []
      //   }
      // ],
      datas: [],
      os: {
        windows: '../../../static/imgs/windows.png',
        ubuntu: '../../../static/imgs/ubuntu.png',
        debian: '../../../static/imgs/debin.png',
        suse: '../../../static/imgs/suse.png',
        centos: '../../../static/imgs/cent_os.png'
      },
      systemName: '',
      clientWidth: ''
    }
  },
  mounted () {
    this.clientWidth = document.body.clientWidth
    this.getAgents()
  },
  methods: {
    async getAgents () {
      // url (必须), init对象 (可选)
      fetch('http://localhost:3001/agents').then((res) => {
        // fetch第一次拿到的是整个Response对象，要调用json()方法转成含有json数据的Promise
        // console.log(res.json())
        res.json().then(result => {
          result.forEach(val => {
            val.showToast = false
            val.resources.forEach(value => {
              value = '<span>' + value + '</span><span class="icon-trash"></span>'
            })
            console.log(val)
          })
          this.datas = result
        })
      }).catch((err) => {
        console.log(err)
        // 中途任何地方出错...在此处理
      })
    },
    addBrower (index) {
      this.datas[index].showToast = true
    },
    closeToast (index) {
      this.datas[index].showToast = false
    },
    adddoms (index) {
      if (this.systemName) {
        let replaceString
        const _this = this
        if (this.systemName.indexOf(',')) {
          let keywordArr = this.systemName.split(',')
          keywordArr.forEach(val => {
            replaceString = '<span>' + val + '</span><span class="icon-trash"></span>'
            _this.datas[index].resources.push(replaceString)
          })
        } else {
          replaceString = '<span>' + this.systemName + '</span><span class="icon-trash"></span>'
          _this.datas[index].resources.push(replaceString)
        }
        this.datas[index].showToast = false
        this.$set(this.datas, 'showToast', false)
      }
    },
    cancelAdd (index) {
      console.log(1111)
      console.log(index)
      console.log(this.datas[index])
      console.log(this.datas[index].showToast)
      this.datas[index].showToast = false
      this.$set(this.datas[index], 'showToast', false)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/dasgboard.scss';
</style>
