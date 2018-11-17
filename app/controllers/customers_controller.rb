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
        @customers = Customer.new(customer_params)
        @customers.save
        redirect_to products_url
    end

    def update
        @customers = Customer.find(params[:id])
        if @customers.update(customer_params)
            flash[:success] = "Updated product information"
            redirect_to customer_path
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
        redirect_to customer_path
    end

    private 

    def customer_params
        params.require(:customer).permit(:first_name, :last_name, :company, :phone_number)
    end
end
