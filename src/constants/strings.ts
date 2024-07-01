export const COMBINED_FOLDER_NAME = '전체'

export const API_MSG = {
  PEN: 'pending',
  FUL: 'fulfilled',
  REJ: 'rejected',
}

export const INPUT_MSG = {
  inputEmail: '이메일을 입력해주세요.',
  inputPw: '비밀번호를 입력해주세요.',
  wrongAccout: '이메일 혹은 비밀번호를 확인해주세요.',
  wrongEmail: '이메일을 확인해주세요.',
  wrongPw: '비밀번호를 확인해주세요.',
  wrongPwForm: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  wrongEmailForm: '올바른 이메일 주소가 아닙니다.',
  emailLength: '이메일은 최대 30자를 넘지않습니다.',
  pwLength: '비밀번호는 최대 20자를 넘지않습니다.',
  duplicateEmail: '이미 사용 중인 이메일입니다.',
  diffrentPw: '비밀번호가 일치하지 않아요.',
}

export const CARD_SECTION_MSG = {
  searchDataNotFound: '검색 결과가 없습니다.',
  dataNotFound: '해당되는 링크가 없습니다.',
}

export const EMAIL_REGX = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i

export const ALPHANUMERIC_REGX = /[0-9a-zA-Z]{8,20}$/
