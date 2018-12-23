class Checkin < ApplicationRecord

  #validation on server
  validates :typeCheckin, presence: {message: ":write a comment."}
  validates :latitude, :longitude, presence: {message: ": ‎make sure javascript is enabled."}

end
