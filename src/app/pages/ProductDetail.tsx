import { useParams, Link } from 'react-router';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/productsData';
import { QuoteForm } from '../components/QuoteForm';

export function ProductDetail() {
  const { productId } = useParams();
  const { t, language } = useLanguage();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl text-gray-900 mb-4">
          {language === 'kk' && 'Өнім табылмады'}
          {language === 'en' && 'Product not found'}
          {language === 'ru' && 'Продукт не найден'}
        </h1>
        <Link to="/products" className="text-blue-600 hover:text-blue-700">
          {language === 'kk' && 'Өнімдерге оралу'}
          {language === 'en' && 'Back to products'}
          {language === 'ru' && 'Вернуться к продуктам'}
        </Link>
      </div>
    );
  }

  const productName = language === 'kk' ? product.nameKk : language === 'en' ? product.nameEn : product.nameRu;
  const productDesc =
    language === 'kk' ? product.descriptionKk : language === 'en' ? product.descriptionEn : product.descriptionRu;
  const applications =
    language === 'kk' ? product.applicationsKk : language === 'en' ? product.applicationsEn : product.applicationsRu;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="size-4" />
            {language === 'kk' && 'Өнімдерге оралу'}
            {language === 'en' && 'Back to products'}
            {language === 'ru' && 'Вернуться к продуктам'}
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                <img src={product.image} alt={productName} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm text-blue-600 mb-2">
                {language === 'kk'
                  ? product.categoryKk
                  : language === 'en'
                  ? product.categoryEn
                  : product.categoryRu}
              </div>
              <h1 className="text-3xl md:text-4xl text-blue-900 mb-4">{productName}</h1>
              <p className="text-lg text-gray-700 mb-6">{productDesc}</p>

              {/* Standards */}
              <div className="mb-6">
                <h3 className="text-lg text-gray-900 mb-3">{t.standards}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.standards.map((standard, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Catalog */}
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors mb-4">
                <Download className="size-5" />
                {t.downloadCatalog}
              </button>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl text-blue-900 mb-6">{t.specifications}</h2>
              <div className="space-y-4">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between border-b pb-3">
                    <span className="text-gray-700">
                      {language === 'kk' ? spec.labelKk : language === 'en' ? spec.labelEn : spec.labelRu}
                    </span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl text-blue-900 mb-6">{t.applications}</h2>
              <ul className="space-y-3">
                {applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl text-blue-900 mb-6 text-center">{t.requestQuote}</h2>
            <QuoteForm productName={productName} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-blue-900 mb-8 text-center">
            {language === 'kk' && 'Ұқсас өнімдер'}
            {language === 'en' && 'Related Products'}
            {language === 'ru' && 'Похожие продукты'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={
                        language === 'kk'
                          ? relatedProduct.nameKk
                          : language === 'en'
                          ? relatedProduct.nameEn
                          : relatedProduct.nameRu
                      }
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 mb-2">
                      {language === 'kk'
                        ? relatedProduct.nameKk
                        : language === 'en'
                        ? relatedProduct.nameEn
                        : relatedProduct.nameRu}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {language === 'kk'
                        ? relatedProduct.descriptionKk
                        : language === 'en'
                        ? relatedProduct.descriptionEn
                        : relatedProduct.descriptionRu}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
