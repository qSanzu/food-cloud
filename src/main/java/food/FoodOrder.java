package food;

import java.util.ArrayList;
import java.util.List;

public class FoodOrder {
    private String deliveryName;
    private String deliveryStreet;
    private String deliveryCity;
    private String deliveryState;
    private String deliveryZip;
    private String ccNumber;
    private String ccExpiration;
    private String ccCVV;

    private List<Food> order = new ArrayList<Food>();

    public void addFood(Food food) {
        this.order.add(food);
    }
}
