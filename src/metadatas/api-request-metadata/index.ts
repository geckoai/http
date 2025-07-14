/**
 * MIT License
 * Copyright (c) 2021 YunlongRan<549510622@qq.com> @geckoai/http
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { ClassDecorate, ClassConstructor } from "@geckoai/class-mirror";

/**
 * @class ApiRequestDecorate
 */
export class ApiRequestDecorate extends ClassDecorate<ApiRequestMetadataImpl> {}

export interface ApiRequestMetadataImpl {
  /**
   * 请求地址
   */
  url: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 语言包 使用 Proxy实现 类型推断上来说它是一个string类型 实际上传入的是一个 Proxy 在proxy对象中实现get返回字符串
   */
  locale?: string;

  /**
   * 请求方法
   */
  method: "post" | "put" | "get" | "delete";

  /**
   * 场景
   */
  scene?: string;

  /**
   * 响应类型
   */
  response?: ClassConstructor;

  /**
   * 请求类型
   */
  contentType?: string;
}
