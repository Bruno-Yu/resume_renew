import type { dataType, selfcontent, aboutItem, workItem } from "../../types/information";
import type { randomObjectType} from "../../types/utils";

// 將轉字串空格轉成 unicode 格式
export const stringConverter= (inputStr: string) => {
  let targetStr = inputStr.trim();
  if(!targetStr) return ''
  return targetStr.replace(' ', '\u0020')
}

// 確認資料格式並進行轉換
// 需轉換格式 array, object, string
export function dataConverter(input: string[]): string[]
export function dataConverter(input:selfcontent): selfcontent
export function dataConverter(input:aboutItem[]): aboutItem[]
export function dataConverter(input:workItem[]): workItem[]
export function dataConverter ( input: randomObjectType ):  string[]| dataType[] | dataType {
  let newData = structuredClone(input) as any
  for(let key in input){
    if(typeof input[key] === 'string'){
      newData[key] = stringConverter(input[key])
    }else if (input[key] instanceof Object) {
      newData[key] = dataConverter(input[key])
    }
  }
  return newData
}