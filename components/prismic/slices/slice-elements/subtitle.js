import PrismicDOM from 'prismic-dom';

export default function Subtitle({subtitle}) {
  return (
    <div className={'content-section-p-subtitle'}>
      <div
        className="content-section-p-subtitle-wrapper"
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(subtitle),
        }}
      />
    </div>
  );
}
