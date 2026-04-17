import { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { products, productCategories } from '../data/productsData';

export function Products() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts =
    selectedCategory === 'all' ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">{t.products}</h1>
          <p className="text-xl text-blue-100">{t.allProducts}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-2xl text-blue-900 mb-6">{t.productCategories}</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {language === 'kk' ? 'Барлығы' : language === 'en' ? 'All' : 'Все'}
              </button>
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {language === 'kk' ? category.nameKk : language === 'en' ? category.nameEn : category.nameRu}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={language === 'kk' ? product.nameKk : language === 'en' ? product.nameEn : product.nameRu}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-blue-600 mb-2">
                    {language === 'kk'
                      ? product.categoryKk
                      : language === 'en'
                      ? product.categoryEn
                      : product.categoryRu}
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    {language === 'kk' ? product.nameKk : language === 'en' ? product.nameEn : product.nameRu}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {language === 'kk'
                      ? product.descriptionKk
                      : language === 'en'
                      ? product.descriptionEn
                      : product.descriptionRu}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {product.standards.slice(0, 2).map((standard, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                {language === 'kk' && 'Өнімдер табылмады'}
                {language === 'en' && 'No products found'}
                {language === 'ru' && 'Продукты не найдены'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-blue-900 mb-4">
            {language === 'kk' && 'Қажетті өнімді таба алмадыңыз ба?'}
            {language === 'en' && "Can't find the product you need?"}
            {language === 'ru' && 'Не нашли нужный продукт?'}
          </h2>
          <p className="text-gray-700 mb-6">
            {language === 'kk' && 'Бізбен байланысыңыз, біз сізге көмектесеміз!'}
            {language === 'en' && 'Contact us and we will help you!'}
            {language === 'ru' && 'Свяжитесь с нами, мы вам поможем!'}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            {t.getQuote}
          </Link>
        </div>
      </section>
    </div>
  );
}
