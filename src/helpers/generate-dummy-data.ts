export default function generateDummyData(): any {
  return {} as any;
}

generateDummyData.string = () => Math.random().toString() as any;
generateDummyData.number = () => Math.floor(Math.random() * 1000000) as any;
