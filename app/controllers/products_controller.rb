class ProductsController < ApplicationController
    
    def index
        @products = Products.all
    end

    def show
        @products = Products.all
    end

    def new
        @products = Products.new

    end

    def edit
        @products = Products.find(params[:id])
    end

    def create
        @products = Products.new(products_params)
        @products.save
        redirect_to products_path
    end

    def update
        @products = Products.find(params[:id])
        if @products.update(products_params)
            flash[:success] = "Updated product information"
            redirect_to products_path
        else
            flash[:alert] = "Error!"
            render :edit
        end
    end

    def destroy
        @products = Products.find(params[:id])
        if @products.present?
            @products.present?
        end
        redirect_to products_path
    end

    private 

    def products_params
        params.require(:products).permit(:part_number)
    end


end
