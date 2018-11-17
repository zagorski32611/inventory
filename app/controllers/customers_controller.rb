class CustomersController < ApplicationController
    def index
        @customers = Customer.all
    end

    def show
        @customers = Customer.all
    end

    def new
        @customers = Customer.new
    end

    def edit
        @customers = Customer.find(params[:id])
    end

    def create
        @customers = Customer.new(products_params)
        @customers.save
        redirect_to products_path
    end

    def update
        @customers = Customer.find(params[:id])
        if @customers.update(products_params)
            flash[:success] = "Updated product information"
            redirect_to products_path
        else
            flash[:alert] = "Error!"
            render :edit
        end
    end

    def destroy
        @customers = Customer.find(params[:id])
        if @customers.present?
            @customers.present?
        end
        redirect_to products_path
    end

    private 

    def products_params
        params.require(:customer).permit(:first_name, :last_name, :comapny, :phone_number)
    end
end
