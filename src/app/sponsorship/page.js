export default function SponsorshipPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sponsorship the Mcmaster Economics Society
      </h1>

      <div className="border rounded-lg shadow-lg overflow-hidden mb-6 bg-white">
        <iframe
          src="/dummy.pdf"
          width="65%"
          display="flex"
          justifycontent="center"
          margin="100 100 100 100"
          height="800px"
          className="border-0"
          title="Sponsorship Package PDF"
          style={{
            minHeight: "600px",
            marginBottom: "20px",
          }}
        />
      </div>
    </div>
  );
}
