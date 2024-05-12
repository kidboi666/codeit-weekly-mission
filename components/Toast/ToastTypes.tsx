export const TOAST_TYPES = [
  { contents: { type: "copyUrl", text: "URL이 복사 되었습니다." } },
  { contents: { type: "addLink", text: "링크가 추가 되었습니다." } },
  { contents: { type: "addFolder", text: "폴더가 추가 되었습니다." } },
  { contents: { type: "deleteFolder", text: "폴더가 삭제 되었습니다." } },
  { contents: { type: "deleteLink", text: "링크가 삭제 되었습니다." } },
  { contents: { type: "changeName", text: "폴더 이름이 변경 되었습니다." } },
  { contents: { warning: true, type: "rejectedAddLink", text: "주소가 올바르지 않습니다." } },
  { contents: { warning: true, type: "nothingValue", text: "주소를 입력하세요." } },
  { contents: { warning: true, type: "emailAlreadyExists", text: "이미 존재하는 이메일 입니다." } },
  { contents: { warning: true, type: "diffrentPassword", text: "비밀번호를 확인해주세요." } },
  { contents: { warning: true, type: "wrongAccount", text: "이메일과 비밀번호를 확인해주세요." } },
  { contents: { warning: true, type: "wrongPasswordForm", text: "비밀번호는 6자 이상 입력해주세요." } },
];
