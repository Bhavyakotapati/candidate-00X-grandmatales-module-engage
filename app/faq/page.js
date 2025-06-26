import faqs from '../../faqs.json';

export default function FAQPage() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}