export default interface Attachment {
  readonly type: "image" | "video" | "audio" | "file" | "link preview";
  readonly name: string;
  readonly url: string;
}
