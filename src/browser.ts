import { FinchMessage } from "./types";

export const addMessageListener = (
  handler: (
    message: FinchMessage,
    sender: browser.runtime.MessageSender | chrome.runtime.MessageSender
  ) => Promise<unknown>
) => {
  if (typeof chrome === "object") {
    chrome.runtime.onMessage.addListener(handler);
  } else if (typeof browser === "object") {
    browser.runtime.onMessage.addListener(handler);
  }
};

export const addExteneralMessageListener = (
  handler: (
    message: FinchMessage,
    sender: browser.runtime.MessageSender | chrome.runtime.MessageSender
  ) => Promise<unknown>
) => {
  if (typeof chrome === "object") {
    chrome.runtime.onMessageExternal.addListener(handler);
  } else if (typeof browser === "object") {
    browser.runtime.onMessageExternal.addListener(handler);
  }
};

export async function sendMessage<MessageReponse extends {}>(
  message: unknown
): Promise<MessageReponse>;
export async function sendMessage<MessageReponse extends {}>(
  extensionId: string,
  message: unknown
): Promise<MessageReponse>;
export async function sendMessage<MessageReponse extends {}>(
  extensionId: string | unknown,
  message?: unknown
): Promise<MessageReponse> {
  const args: [unknown] | [string, unknown] = [extensionId];
  if (typeof message === "object") {
    args.push(message);
  }

  if (typeof chrome === "object") {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(...args, (resp: MessageReponse) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        }
        resolve(resp);
      });
    });
  }

  if (typeof browser === "object") {
    return browser.runtime.sendMessage(...args) as Promise<MessageReponse>;
  }

  return Promise.reject(
    new Error("Cannot send message to extension, this browser is not supported")
  );
}