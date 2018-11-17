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


    private 

    def products_params
        params.require(:product).permit(:part_number, :sku, :quantity, :vendor, :name)
    end


end
