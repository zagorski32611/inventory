class ProductsController < ApplicationController
    
    def index
        @products = Product.all
        @customers = Customer.all
        @customer = Customer.new
    end

    def show
        @products = Product.all
    end

    def new
        @products = Product.new
    end

    def edit
        @products = Product.find(params[:id])
    end

    def create
        @products = Product.new(products_params)
        @products.save
        redirect_to products_path
    end

    def update
        @products = Product.find(params[:id])
        if @products.update(products_params)
            flash[:success] = "Updated product information"
            redirect_to products_path
        else
            flash[:alert] = "Error!"
            render :edit
        end
    end

    def destroy
        @products = Product.find(params[:id])
        if @products.present?
            @products.present?
        end
        redirect_to products_path
    end

    def search
        # This is the search term, that will be built with jbuilder in /views/products/search.json
        @customers = Customer.ransack(params[:q]).result(distinct: :true)
        @products = Product.ransack(params[:q]).result(distinct: :true
    end 

    private 

    def products_params
        params.require(:product).permit(:part_number, :sku, :quantity, :vendor, :name)
    end


end
