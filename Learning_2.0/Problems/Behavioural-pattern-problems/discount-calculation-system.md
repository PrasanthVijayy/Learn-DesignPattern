# Strategy Pattern: Discount Calculation System

## Overview

This project implements a **Discount Calculation System** for an e-commerce platform using the **Strategy Pattern**. The system allows dynamic application of different discount strategies based on customer types and seasonal events, ensuring flexibility and reusability of discount logic. It combines customer-specific discounts with seasonal offers to determine the final price.

## Features

- **Multiple Customer Types**: Supports discount strategies for Regular, Premium, and VIP customers.
- **Seasonal Discount Strategies**: Includes Holiday and Clearance Sale discounts that can be applied on top of customer discounts.
- **Dynamic Strategy Switching**: Allows changing the discount strategy dynamically based on customer type or seasonal event.
- **Combined Discounts**: Applies both customer-specific and seasonal discounts to calculate the final price.

## Internal Structure

1. **Context (DiscountCalculator)**  
   - Holds a reference to the customer type discount strategy and seasonal discount strategy.  
   - Provides methods to set or change these strategies dynamically.
   - Responsible for combining both discount strategies to calculate the final price.

2. **Strategy (CustomerDiscountStrategy)**  
   - Defines the interface for customer-type discount calculation.  
   - Includes a method for calculating the base discount for each customer type.

3. **Concrete Strategies for Customer Types (RegularCustomer, PremiumCustomer, VIPCustomer)**  
   - Implements the customer discount calculation for different customer types:
     - **RegularCustomer**: No discount.
     - **PremiumCustomer**: 10% discount.
     - **VIPCustomer**: 20% discount.
     - **EliteCustomer**: 30% discount.
     - **ClearnceSale**: 50% discount (additional discount is applicable).

## How to Use

1. **Set Customer Type**: Choose the customer type (Regular, Premium, VIP) to apply their respective discount strategy.
2. **Apply Seasonal Discounts**: Select a seasonal discount strategy (Holiday, Clearance Sale, or No Seasonal Discount).
3. **Calculate Final Price**: The system will combine both strategies and return the final discounted price.
4. **Change Strategies**: Both customer type and seasonal event strategies can be switched dynamically at any time.

## Solution

You can find the solution to this problem in the [solution folder](/Learning_2.0/Solutions/Behavioural-pattern-solutions/discount-calculation-system/).
