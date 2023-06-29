export default function AboutWithID({ params }: any) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      About with Id:{params.id}
    </div>
  );
}
