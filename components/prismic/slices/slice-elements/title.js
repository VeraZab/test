import PrismicDOM from 'prismic-dom';

export default function Title({title}) {
  return (
    <div className={'content-section-p-title'}>
      <div
        className="content-section-p-title-wrapper"
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(title),
        }}
      />
    </div>
  );
}
