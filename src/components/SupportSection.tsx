
import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';

const SupportSection = () => {
  // BTCPay form functionality
  useEffect(() => {
    const handlePlusMinus = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLButtonElement;
      const root = target.closest('.btcpay-form') as HTMLFormElement;
      const el = root.querySelector('.btcpay-input-price') as HTMLInputElement;
      const step = parseInt(target.dataset.step || '1');
      const min = parseInt(target.dataset.min || '1');
      const max = parseInt(target.dataset.max || '100000000');
      const type = target.dataset.type;
      const price = parseInt(el.value) || min;
      
      if (type === '-') {
        el.value = (price - step < min ? min : price - step).toString();
      } else if (type === '+') {
        el.value = (price + step > max ? max : price + step).toString();
      }
    };

    const handlePriceInput = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      const root = target.closest('.btcpay-form') as HTMLFormElement;
      const price = parseInt(target.dataset.price || '1');
      if (isNaN(parseInt(target.value))) {
        const priceInput = root.querySelector('.btcpay-input-price') as HTMLInputElement;
        priceInput.value = price.toString();
      }
      const min = parseInt(target.getAttribute('min') || '1');
      const max = parseInt(target.getAttribute('max') || '100000000');
      if (parseInt(target.value) < min) {
        target.value = min.toString();
      } else if (parseInt(target.value) > max) { 
        target.value = max.toString();
      }
    };

    // Add event listeners for plus/minus buttons
    document.querySelectorAll(".btcpay-form .plus-minus").forEach((el) => {
      const element = el as HTMLButtonElement;
      if (!element.dataset.initialized) {
        element.addEventListener('click', handlePlusMinus);
        element.dataset.initialized = 'true';
      }
    });

    // Add event listeners for price input
    document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach((el) => {
      const element = el as HTMLInputElement;
      if (!element.dataset.initialized) {
        element.addEventListener('input', handlePriceInput);
        element.dataset.initialized = 'true';
      }
    });

    // Cleanup function
    return () => {
      document.querySelectorAll(".btcpay-form .plus-minus").forEach((el) => {
        const element = el as HTMLButtonElement;
        element.removeEventListener('click', handlePlusMinus);
        element.dataset.initialized = '';
      });

      document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach((el) => {
        const element = el as HTMLInputElement;
        element.removeEventListener('input', handlePriceInput);
        element.dataset.initialized = '';
      });
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-orange-100 to-amber-100 border-t border-b border-orange-200 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-orange-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Support BTC Learn</h2>
            <Heart className="h-6 w-6 text-orange-500 ml-2" />
          </div>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Help us maintain and expand this free Bitcoin education resource. Your support enables us to keep adding valuable content and improving the platform for the entire Bitcoin community.
          </p>
        </div>
        
        {/* BTCPay Server Embedded Form */}
        <div className="flex justify-center">
          <div>
            <style dangerouslySetInnerHTML={{
              __html: `
                .btcpay-form { display: inline-flex; align-items: center; justify-content: center; }
                .btcpay-form--inline { flex-direction: row; }
                .btcpay-form--block { flex-direction: column; }
                .btcpay-form--inline .submit { margin-left: 15px; }
                .btcpay-form--block select { margin-bottom: 10px; }
                .btcpay-form .btcpay-custom-container{ text-align: center; }
                .btcpay-custom { display: flex; align-items: center; justify-content: center; }
                .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; }
                .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; }
                .btcpay-form select:hover { border-color: #ccc; }
                .btcpay-form option { color: #000; background: rgba(0,0,0,.1); }
                .btcpay-input-price { -moz-appearance: textfield; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; }
                .btcpay-input-price::-webkit-outer-spin-button, .btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
              `
            }} />
            
            <form method="POST" action="https://merchant.btclearn.org/api/v1/invoices" className="btcpay-form btcpay-form--block">
              <input type="hidden" name="storeId" value="3Vh6xiQCc6yvKJc1wYriC14uPQH3d92xKzE6arHD1UJM" />
              <div className="btcpay-custom-container">
                <div className="btcpay-custom">
                  <button 
                    className="plus-minus" 
                    type="button" 
                    data-type="-" 
                    data-step="1" 
                    data-min="1" 
                    data-max="100000000"
                  >
                    -
                  </button>
                  <input 
                    className="btcpay-input-price" 
                    type="number" 
                    name="price" 
                    min="1" 
                    max="100000000" 
                    step="1" 
                    defaultValue="1" 
                    data-price="1" 
                    style={{width: '3em'}} 
                  />
                  <button 
                    className="plus-minus" 
                    type="button" 
                    data-type="+" 
                    data-step="1" 
                    data-min="1" 
                    data-max="100000000"
                  >
                    +
                  </button>
                </div>
                <select name="currency" defaultValue="SATS">
                  <option value="SATS">SATS</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                  <option value="BTC">BTC</option>
                </select>
              </div>
              <input 
                type="image" 
                className="submit" 
                name="submit" 
                src="https://merchant.btclearn.org/img/paybutton/pay.svg" 
                style={{width: '209px'}} 
                alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
              />
            </form>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Powered by BTCPay Server - Self-hosted Bitcoin payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
