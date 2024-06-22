import * as S from './Footer.styled'
import facebook from '@/public/icons/fill_facebook_icon.svg'
import twitter from '@/public/icons/fill_twitter_icon.svg'
import youtube from '@/public/icons/fill_youtube_icon.svg'
import instagram from '@/public/icons/fill_instagram_icon.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <S.FooterLayout>
      <S.FooterBox>
        <S.CopyrightBox>
          <p>©codeit-2023</p>
        </S.CopyrightBox>
        <S.PrivacyBox>
          <a href="/privacy/" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <a href="/faq/" target="_blank" rel="noreferrer">
            FAQ
          </a>
        </S.PrivacyBox>
        <S.SnsContainer>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Image src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/?lang=ko" target="_blank" rel="noreferrer">
            <Image src={twitter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/?gl=KR&hl=ko" target="_blank" rel="noreferrer">
            <Image src={youtube} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Image src={instagram} alt="instagram" />
          </a>
        </S.SnsContainer>
      </S.FooterBox>
    </S.FooterLayout>
  )
}

export default Footer
