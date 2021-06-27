class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name"> ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} RUB</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div> 
                
				        <table border="1" width="900">        
					     
					         <td class="shopping-element__name">Наименование товара</td>
                             <td class="shopping-element__price">Цена</td>
					     
					  ${htmlCatalog}
                         </table><br>
				         <table border="1" width="900" > 
                             <td class="shopping-element__name"> Сумма:</td>
                             <td class="shopping-element__price">${sumCatalog.toLocaleString()} RUB</td>
			             </table			 
            
			</div>
			
			
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
