import { FAELoading } from '@findanexpert-fae/components/dist/stories/FAELoading/FAELoading'
import React, { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ResendSMSCode, VerifyEmailNewSignup } from '../../redux/actions/signUpPageActions'
import { getCookies, getFileSrcFromPublicFolder } from '../../utils'
import PhoneNumVerification from '../../widgets/phoneNumVerification'

function EmailVerificationPage({
    loading,
    userCountryId,
    userCountry, 
    VerifyEmailNewSignup,
    ResendSMSCode
}) {
    const [emailIdInput, setEmailIdInput] = useState("")
    const [emailVerifCode, setEmailVerifCode]= useState("")
    const userId = getCookies("userId"); 
    const loaderImage = getFileSrcFromPublicFolder("account-loader.svg");

    useEffect(() => {
        if (emailVerifCode.length === 6) {
          // Do_Empty_signup_reducer_OBJECT_Action()
          VerifyEmailNewSignup({
            userId:userId,
            verificationCode:emailVerifCode
          });
          setEmailVerifCode("")
         } 
      }, [emailVerifCode]);
    // resend verification code again 
    const resendHandle =(isemailFlag)=>{
        ResendSMSCode({
          countryCode: userCountryId, 
          userId: userId,
          email: emailIdInput,
          isEmail: isemailFlag
         })
      }
  return (
    <div className="fae--new-signup-page-container" >
      {loading && (
        <div className='fae-signup-loader'>
            <FAELoading   type="svg" loaderImage={loaderImage} height="100vh" />
        </div> 
        )}
        <PhoneNumVerification
            resendHandler ={()=>resendHandle(true)}
            phoneNumber ={emailIdInput}
            verifcationCode ={setEmailVerifCode}/>
     </div>
    )
  }
 const mapStateToProps = ({
    signUpPageReducer: { 
        loading, 
        verify_email_response, 
    },
    defaultReducer: { userCountryId, userCountry },
  })=>{
    return {
        loading,
        userCountryId,
        userCountry, 
        verify_email_response, 
     }
  }

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({  
        VerifyEmailNewSignup,
         ResendSMSCode
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps )(memo(EmailVerificationPage))
 
