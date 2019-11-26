<template>
	<v-container fluid>
		<v-layout column>
			<!-- Название события -->
			<v-flex xs-12 v-if="eventInfo">
				<h1 class="text-lg-center text-md-center text-sm-center text-xs-center">
					{{eventInfo.eventTitle}}</h1>
			</v-flex>
			<v-flex xs-12>
				<v-layout my-1 row>
					<!-- Регистрация -->
					<registration-form v-if="goRegistration && eventInfo && personInfoComp !== undefined" 
													:event-info="eventInfo"
													:person-info="personInfoComp"
													:idparams="params"></registration-form>
					<!-- сообщение/ сообщение об ошибке -->
					<message v-if="showMessage" :titlemessage="message" class="border-frame"></message>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>

import RegistrationForm from '../components/RegistrationForm'
import Message from '../components/Message'
import {testGuid} from '../helpers/chekcer.js'

export default {
	name: 'registration',
	components: {
		RegistrationForm,
		Message
	},
	data() {
		return {
			params: {
				eventid: null,
				personid: null
			},
			lang: 'ru',
			error: null,
			errorMessage: null,
			goRegistration: false,
			showMessage: false,
			message: '',
			eventInfo: null,
			personInfo: undefined,
			isRegistered: false,
			skipRegistrationCheck: false
		}
	},
	created() {
		this.params.eventid = this.$route.params.eventGuid
		this.params.personid = this.$route.params.personGuid
		this.lang = window.myConfig.lang

		var paramsCheckResult = this.checkParams(this.params)
		
		this.showMessage = true
		switch (paramsCheckResult) {
			case 'noparams':
				this.message = this.$t('message.registrationPage.linkHasNoParams')
				break;
			case 'parameternotcorrect':
				this.message = this.$t('message.registrationPage.paramIsWrong')
				break;
			case 'bothparamsnotcorrect':
				this.message = this.$t('message.registrationPage.paramsAreWrong')
				break;
			case 'secondparamnotcorrect':
				this.message = this.$t('message.registrationPage.secondParamIsWrong')
				break;
			case 'firstparamnotcorrect':
				this.message = this.$t('message.registrationPage.firstParamIsWrong')
				break;
			case 'nosecondparams':
				this.showMessage = false
				this.goRegistration = true
				this.skipRegistrationCheck = true
				this.personInfo = null
				break;
			case 'ok':
				this.showMessage = false
				this.goRegistration = true
				break;
			default: break;
		}
		if(!this.showMessage) {
			this.getEventInfo(this.params.eventid, this.lang)
		}
	},

	mounted() {
	},
	methods: {
		checkParams(params) {
			var eventidIsCorrect = false
			var personidIsCorrect  = false
			if (!params.eventid && !params.personid) {
				return 'noparams'
			}
			if (params.eventid && !params.personid) {
				eventidIsCorrect = testGuid(params.eventid)
				if (eventidIsCorrect) {
					return 'nosecondparams'
				} else {
					return 'parameternotcorrect' 
				}
			}
			
			eventidIsCorrect = testGuid(params.eventid)
			personidIsCorrect = testGuid(params.personid)
			
			if (!eventidIsCorrect && !personidIsCorrect) {
				return 'bothparamsnotcorrect'
			}
			if (!eventidIsCorrect && personidIsCorrect) {
				return 'firstparamnotcorrect'
			}
			if (eventidIsCorrect && !personidIsCorrect) {
				return 'secondparamnotcorrect'
			}
			return 'ok'
		},
		getEventInfo(eventid) {

			if (eventid !== '8a583d06-4920-4cdc-bcdd-ef2d32463a81') {
				this.goRegistration = false
				this.showMessage = true
				this.message = this.$t('message.registrationPage.linkHasNotCorrespondin')
			} else {
				this.goRegistration = true
				this.showMessage = false
				if (!this.skipRegistrationCheck) {
						this.hasRegistered(this.params.eventid, this.params.personid)
					}
				this.eventInfo = {
					eventTitle: 'New Year Webinar!',
					eventDescription: 'We will start on 2020-01-01 at 07:01 AM!'
				}
			}
		},

		hasRegistered ( eventid, personid ) {
			if (eventid === '8a583d06-4920-4cdc-bcdd-ef2d32463a81' && personid === '59e81435-4473-4133-a346-308908f4dfc4') {
					this.goRegistration = true
					this.showMessage = false
					this.personInfo = {
									name: 'Vadim',
									surname: 'Grechin',
									email: 'vadim.grechin.1@gmail.com',
									company: 'IT-Soft',
									// PL - Ок
									phone: '+48333666222',
									// UA - ?
									//phone: '+380685553322',
									position: 'Junior Developer'
					}
			} else {
					this.goRegistration = false
					this.showMessage = true
					this.message = this.$t('message.registrationPage.youHaveRegistration')
					this.personInfo = null
			}
		},
	},
	computed: {
		eventInfoData() {
			return this.eventInfo
		},
		goToRegistration() {
			return this.goRegistration
		},
		personInfoComp() {
			return this.personInfo
		}
	}
}
</script>

<style scoped>
.light-gray-color {
	background: #fafafa
}
.border-frame{
	border: dotted 1px blue;
}
</style>