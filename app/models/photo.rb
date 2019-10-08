class Photo < ApplicationRecord
  validates :title, presence: { message: "Can't be blank" }
  validates :owner, presence: { message: "Can't be blank" }
end
