// 將轉字串空格轉成 unicode 格式
export const stringConverter= (inputStr: string) => {
  let targetStr = inputStr.trim();
  if(!targetStr) return ''
  return targetStr.replace(' ', '\u0020')
}

// 確認資料格式並進行轉換
// 需轉換格式 array, object, string

export const dataConverter= ( input: string[]| object[] | object ) => {
  let newData = Array.isArray(input) ? []: {}
  for(let key in input){
    if(typeof input[key]=== 'string'){
      newData[key] = stringConverter(input[key])
    }else if (input[key] instanceof Object) {
      newData[key] = dataConverter(input[key])
    }
  }
  return newData
}