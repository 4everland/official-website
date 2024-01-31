<template>
  <div id="ExploreSections">
    <v-container>
      <div v-show="isShow" class="explore-box">
        <div class="explore-top">
          <div class="explore-top-title">Explore DApps</div>
          <div class="search-box">
            <v-icon size="20px"> mdi-magnify </v-icon>
            <input
              v-model="searchText"
              type="text"
              placeholder="Search DApps"
              @input="search"
            />
          </div>
          <div class="hidden-md-and-up mobile-menu">
            <v-select
              v-model="defaultMobileType"
              :items="typesList"
              :value="typesList[defaultType]"
              solo
              @change="mobileChooseType"
            >
            </v-select>
          </div>
        </div>
        <div class="explore-main">
          <div class="sticky explore-menu hidden-sm-and-down">
            <div
              class="explore-menu-item"
              :class="{ active: defaultType === 'all' }"
              @click="showAll"
            >
              <div class="explore-menu-item-type">ALL</div>
              <!-- <div class="explore-menu-item-num">{{ dappsList.length }}</div> -->
            </div>
            <div
              v-for="(value, key, index) in typeList"
              :key="key"
              class="explore-menu-item"
              :class="{ active: defaultType === index }"
              @click="chooseType(key, index)"
            >
              <div class="explore-menu-item-type">{{ key }}</div>
              <!-- <div class="explore-menu-item-num">{{ value }}</div> -->
            </div>
          </div>
          <div class="explore-list">
            <v-row style="margin: 0">
              <v-col
                v-for="(item, index) in showList"
                :key="index"
                cols="12"
                md="4"
                class="explore-list-item"
              >
                <v-img :src="item.logo" width="56px"></v-img>
                <div class="dapps-name">{{ item.name }}</div>
                <div class="dapps-desc">
                  {{ item.desc }}
                </div>
                <div class="dapps-more">
                  <a :href="item.website" target="_blank">Explore Now</a>
                </div>
                <div class="dapps-footer">
                  <div class="tags">
                    <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                    <v-btn
                      v-if="item.ipfs"
                      icon
                      class="float-right mr-4"
                      @click="toIpfs(item.ipfs)"
                    >
                      <img
                        src="@/assets/imgs/ecosystem/ipfs.png"
                        width="18px"
                      />
                    </v-btn>
                    <v-btn
                      v-if="item.github"
                      icon
                      class="float-right"
                      :href="item.github"
                      target="_blank"
                    >
                      <img
                        src="@/assets/imgs/ecosystem/github.png"
                        width="18px"
                      />
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      typesList: [],
      dappsList: [],
      showList: [],
      typeList: {},
      defaultType: 0,
      defaultMobileType: '',
      searchText: '',
    }
  },
  mounted() {
    this.getDappsList()
  },
  methods: {
    async getDappsList() {
      const { data } = await this.$axios.get(
        'https://eco.4everland.space/json/dapps.json'
      )
      this.formatData(data)
      this.isShow = true
    },
    formatData(data) {
      const { types, list } = data
      this.typesList = types
      this.dappsList = list
      this.defaultMobileType = types[0]
      const typeList = {}
      types.forEach((element) => {
        if (element !== '') {
          typeList[element] = 0
        }
      })
      list.forEach((element) => {
        if (element.type !== '') {
          typeList[element.type] += 1
        }
      })
      this.typeList = typeList
      // this.chooseType(types[0], 0)
      this.showAll()
    },
    mobileChooseType(val) {
      this.chooseType(val)
    },
    chooseType(key, index) {
      const arr = []
      this.dappsList.forEach((ele) => {
        if (Array.isArray(ele.type)) {
          console.log(ele.type)
          ele.type.forEach((i) => {
            if (i === key) {
              arr.push(ele)
            }
          })
        } else if (ele.type === key) {
          arr.push(ele)
        }
      })
      this.showList = arr
      this.defaultType = index
    },
    showAll() {
      this.showList = this.dappsList
      this.defaultType = 'all'
    },
    search(e) {
      const val = e.target.value.toLowerCase()
      if (val === '') {
        if (this.defaultType === 'all') {
          this.showAll()
        } else {
          const index = this.defaultType
          const type = this.typesList[index]
          this.chooseType(type, index)
        }
        return
      }
      const arr = []
      this.dappsList.forEach((ele) => {
        const name = ele.name.toLowerCase()
        const indexOf = name.indexOf(val)
        const index = this.defaultType
        const type = this.typesList[index]
        if (this.defaultType === 'all') {
          if (indexOf !== -1) {
            arr.push(ele)
          }
        } else if (indexOf !== -1 && type === ele.type) {
          arr.push(ele)
        }
      })
      this.showList = arr
    },
    toIpfs(cid) {
      const url = 'https://4everland.io/ipfs/' + cid
      window.open(url)
    },
  },
}
</script>
<style lang="less" scoped>
#ExploreSections {
  position: relative;
  padding-top: 71px;
  .explore-box {
    position: relative;
    .explore-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 68px;
      padding: 0 15px;
      border: 1px solid #eeeef2;
      &-title {
        font-size: 28px;
        font-weight: bold;
        color: #292934;
        font-family: 'BookmanOldStyle-Bold', sans-serif !important;
      }
      .search-box {
        width: 300px;
        height: 45px;
        border: 1px solid #eeeef2;
        display: flex;
        align-items: center;
        padding: 0 20px;
        input {
          outline: none;
          margin-left: 16px;
          width: 100%;
          font-size: 14px;
        }
      }
    }
    .explore-main {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      margin-top: -1px;
      .explore-menu {
        flex: 0 0 240px;
        max-width: 240px;
        margin-right: -1px;
        &-item {
          border-left: 1px solid #eeeef2;
          border-right: 1px solid #eeeef2;
          border-bottom: 1px solid #eeeef2;
          display: flex;
          justify-content: space-between;
          padding: 26px 16px;
          font-size: 18px;
          position: relative;
          cursor: pointer;
          &:first-child {
            border-top: 1px solid #eeeef2;
          }

          &-type {
            font-weight: bold;
            color: #525272;
            font-family: 'Ubuntu', sans-serif !important;
          }
          &-num {
            color: #5d606c;
          }
          &.active {
            &::before {
              content: '';
              width: 4px;
              height: 26px;
              background: #452c92;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              margin: auto;
            }
            .explore-menu-item-type {
              color: #452c92;
            }
          }
        }
      }
      .sticky {
        top: 82px;
        position: sticky;
        position: -webkit-sticky;
      }
      .explore-list {
        width: 100%;
        &-item {
          border: 1px solid #eeeef2;
          padding: 30px;
          .dapps-name {
            font-size: 18px;
            font-weight: bold;
            margin-top: 17px;
            font-family: 'BookmanOldStyle-Bold', sans-serif !important;
          }
          .dapps-desc {
            min-height: 92px;
            font-size: 16px;
            color: #5d606c;
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            margin-top: 23px;
            font-family: 'Ubuntu', sans-serif !important;
          }
          .dapps-more {
            font-size: 14px;
            color: #452c92;
            margin-top: 27px;
            a {
              text-decoration: none;
              font-size: 14px;
              color: #452c92;
            }
          }
          .dapps-footer {
            margin-top: 28px;
            .tags {
              span {
                display: inline-block;
                min-width: 56px;
                height: 24px;
                line-height: 24px;
                background: #ebebf0;
                border-radius: 10px;
                text-align: center;
                font-size: 11px;
                color: #132642;
                margin-right: 12px;
                margin-bottom: 12px;
                padding: 0 16px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  #ExploreSections {
    .explore-box {
      .explore-top {
        display: block;
        height: auto;
        border: none;
        .explore-top-title {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .mobile-menu {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
