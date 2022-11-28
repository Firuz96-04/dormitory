<template>
  <div class="room_student">
    <div class="room_student_header">
      <div class="room_student_header_image">
        <img src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" />
      </div>
      <div class="room_student_header_info">
        <div class="room_student_header_info_name">{{name}}</div>
        <div class="room_student_header_info_data">
          <div class="room_student_header_info_data_year">21 years</div>
          <div class="room_student_header_info_data_gender">
            <span v-if="gender == 'M' " style="color: #27AE60">Мужчина</span>          
            <span style="color: #E74C3C" v-else>Женшина</span>
             </div>  
        </div>
      </div>
    </div>
    <div class="room_student_main">
        <div class="room_student_main_number"><span v-if="phone">{{phone}}</span> <span v-else>неизвестный</span></div>
        <div class="room_student_main_contacts">Контакт</div>
    </div>
    <div class="room_student_footer">
        <div class="room_student_footer_country">
          <div class="room_student_footer_country_title">Страна</div>
          <div class="room_student_footer_country_name">{{country}}</div>
        </div>
        <div class="room_student_footer_faculty">
          <div class="room_student_footer_faculty_title">Факультет</div>
          <div class="room_student_footer_faculty_name">{{faculty}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      room_id: {
        type: Number,
        default: 0
      },
      country: {
        type: String,
        required: false
      },
      faculty:{
        type: String,
        required: false
      },
      phone:{
        type:String,
        required: false
      },
      name: {
        type:String,
        required: false
      },
      gender:{
        type: String,
        required: false
      }
  },
    data() {
      return {
        
      }
    },

    methods:{
        
    }
}
</script>

<style lang="sass" scoped>
.room_student
  display: flex
  flex-direction: column
  width: 350px
  padding: 15px
  background-color: #FFFFFF
  border-radius: 10px
  margin: 10px
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px

  &_header
    display: flex
    justify-content: flex-start

    &_image
      img
        width: 60px
        height: 60px
        border-radius: 100%

        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 4px 3px rgba(0,0,0,.3)
    &_info
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: flex-start
      margin-left: 10px

      &_data
        display: flex

        &_year
          font-size: 16px
          font-weight: 600

        &_gender
          margin-left: 15px 
          font-size: 16px
          font-weight: 600
          // color: #27AE60
      &_name
        font-size: 18px
  &_main
    margin-top: 5px
    &_number
      font-size: 16px
 
    &_contacts
      color: #3498DB
      font-size: 16px
      font-weight: 600
  &_footer
    display: flex
    justify-content: space-between
    margin-top: 15px

    &_country
      display: flex
      flex-direction: column

      &_title
        font-weight: 600
        font-size: 18px
      &_name
        color: #797D7F
        font-weight: 600
        font-size: 16px

    &_faculty
      display: flex
      flex-direction: column  

      &_title
        font-weight: 600
        font-size: 18px

      &_name
        color: #797D7F
        font-weight: 600
        font-size: 16px
</style>
