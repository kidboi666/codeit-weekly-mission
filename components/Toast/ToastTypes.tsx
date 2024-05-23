type ToastType =
  | "copyUrl"
  | "addLink"
  | "moveLink"
  | "addFolder"
  | "deleteFolder"
  | "deleteLink"
  | "changeName"
  | "loginSuccess"
  | "rejectedAddLink"
  | "nothingValue"
  | "emailAlreadyExists"
  | "diffrentPassword"
  | "wrongAccount"
  | "wrongPasswordForm"
  | "duplicateFolderName"
  | "firstAction"
  | "pendingTask";

export const TOAST_COMPONENTS: Map<ToastType, { text: string; warn: boolean }> = new Map<
  ToastType,
  { text: string; warn: boolean }
>([
  ["copyUrl", { text: "URL이 복사 되었습니다.", warn: false }],
  ["addLink", { text: "링크가 추가 되었습니다.", warn: false }],
  ["moveLink", { text: "링크가 이동 되었습니다.", warn: false }],
  ["addFolder", { text: "폴더가 추가 되었습니다.", warn: false }],
  ["deleteFolder", { text: "폴더가 삭제 되었습니다.", warn: false }],
  ["deleteLink", { text: "링크가 삭제 되었습니다.", warn: false }],
  ["changeName", { text: "폴더 이름이 변경 되었습니다.", warn: false }],
  ["loginSuccess", { text: "로그인 성공!", warn: false }],
  ["rejectedAddLink", { text: "주소가 올바르지 않습니다.", warn: true }],
  ["nothingValue", { text: "주소를 입력하세요.", warn: true }],
  ["emailAlreadyExists", { text: "이미 존재하는 이메일 입니다.", warn: true }],
  ["diffrentPassword", { text: "비밀번호를 확인해주세요.", warn: true }],
  ["wrongAccount", { text: "이메일과 비밀번호를 확인해주세요.", warn: true }],
  ["wrongPasswordForm", { text: "비밀번호는 6자 이상 입력해주세요.", warn: true }],
  ["duplicateFolderName", { text: "같은 이름의 폴더가 이미 존재합니다.", warn: true }],
  ["firstAction", { text: "폴더가 없다면 먼저 폴더를 생성해주세요.", warn: true }],
  ["pendingTask", { text: "미구현 기능 입니다.", warn: true }],
]);
